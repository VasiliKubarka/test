// @flow

import * as React from 'react';
import * as R from 'ramda';
import { compose } from 'recompose';
import type { OperationComponent, GraphqlData } from 'react-apollo';
import { graphql } from 'react-apollo';
import { withCurrentSpaceId } from 'utils/hocs/withCurrentSpaceId';
import type { WithCurrentSpaceId } from 'utils/hocs/withCurrentSpaceId';
import gql from 'graphql-tag';
import type { GetSelectedItem, GetSelectedItemVariables } from 'types/GetSelectedItem';
import { PORTFOLIO_TAB_ABSTRACT_FRAGMENT } from 'apollo/apolloStore/portfolio/tab/tab.fragments';

const SELECTED_BUILDING_QUERY = gql`
  query GetSelectedItem($id: ID, $type: String, $typename: AbstractType) {
    portfolioTabPath(id: $id, type: $type, typename: $typename) @client {
      ...PortfolioTabAbstractFragment
    }
  }
  ${PORTFOLIO_TAB_ABSTRACT_FRAGMENT}
`;

const withSelectedBuilding = (variables: GetSelectedItemVariables): OperationComponent<GetSelectedItem> =>
  graphql(SELECTED_BUILDING_QUERY, {
    name: 'selectedItemResult',
    options: {
      variables,
    },
  });

type WithRefetchLogicProps = {
  ...$Exact<WithCurrentSpaceId>,
  selectedItemResult: GraphqlData<{ portfolioTabPath: any }, {}>,
};

const withRefetchLogic = (name: string) => <Config: WithRefetchLogicProps>(
  Component: React.AbstractComponent<$Diff<Config, { selectedItemResult: any }>>,
): React.AbstractComponent<Config> => {
  return class TestHoc extends React.Component<Config> {
    componentDidUMount({ currentSpaceId, selectedItemResult }: Config): void {
      if (currentSpaceId) selectedItemResult.refetch();
    }

    componentDidUpdate({ currentSpaceId: previousSpaceId }: Config): void {
      const { currentSpaceId, selectedItemResult } = this.props;
      if (previousSpaceId !== currentSpaceId) selectedItemResult.refetch();
    }

    render() {
      const { selectedItemResult, ...rest } = this.props;
      return (
        <Component {...rest} {...{ [name]: (selectedItemResult && selectedItemResult.portfolioTabPath) || null }} />
      );
    }
  };
};

type WithSelectedItemResultType = <T: { [string]: GetSelectedItemVariables }>(
  config: T,
) => HOCProps<{
  ...$Exact<WithCurrentSpaceId>,
  ...$ObjMap<T, <V>(val: V) => $PropertyType<GetSelectedItem, 'portfolioTabPath'>>,
}>;

export const withSelectedItemResult: WithSelectedItemResultType = config =>
  compose(
    withCurrentSpaceId,
    withSelectedBuilding(R.values(config)[0]),
    withRefetchLogic(R.keys(config)[0]),
  );
