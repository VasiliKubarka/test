// @flow

import { compose, withProps } from 'recompose';
import { type ContextRouter, withRouter } from 'react-router-dom';
import { getCurrentSpaceId } from 'utils/common';

export type WithCurrentSpaceId = {
  currentSpaceId: ?string,
  ...ContextRouter,
};

export const withCurrentSpaceId: HOCProps<WithCurrentSpaceId> = compose(
  withRouter,
  withProps(({ location }: ContextRouter) => ({
    currentSpaceId: getCurrentSpaceId(location),
  })),
);
