// @flow

import * as React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';

export type PropSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type GridProps = {|
  columns: string,
  autoRows: string,
  gap: PropSizes,
  children: React$Node,
|};

const getSizesFromProps: (value: ?PropSizes) => string = R.cond([
  [R.equals('xs'), R.always('10px')],
  [R.equals('sm'), R.always('15px')],
  [R.equals('md'), R.always('20px')],
  [R.equals('lg'), R.always('30px')],
  [R.equals('xl'), R.always('40px')],
  [R.T, R.always('0')],
]);

const GridBase: React$ComponentType<GridProps> = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }: GridProps) => columns};
  grid-auto-rows: ${({ autoRows }: GridProps) => autoRows};
  grid-gap: ${({ gap }: GridProps) => getSizesFromProps(gap)};
  flex: 1;
`;

const Grid = ({ children, ...rest }: GridProps) => <GridBase {...rest}>{children}</GridBase>;
Grid.BaseWrapper = GridBase;
Grid.defaultProps = {
  columns: 'auto',
  autoRows: 'auto',
  gap: 'xs',
};

export { Grid };
