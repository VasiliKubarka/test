// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import * as R from 'ramda';

const itemsStyles = {
  start: 'flex-start',
  end: 'flex-end',
  baseline: 'baseline',
  center: 'center',
  stretch: 'stretch',
};

const contentStyles = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  stretch: 'stretch',
};

export type PropSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type LayoutCommonProps = {|
  children: React$Node,
  justifyContent: $Keys<typeof contentStyles>,
  alignContent: $Keys<typeof contentStyles>,
  alignItems: $Keys<typeof itemsStyles>,
  flex?: string | number,
  gap?: PropSizes,
  offsetX?: PropSizes,
  offsetY?: PropSizes,
  offsetTop?: PropSizes,
  offsetBottom?: PropSizes,
  offsetLeft?: PropSizes,
  offsetRight?: PropSizes,
  borderBox?: boolean,
  position?: 'relative' | 'absolute',
|};

type LayoutProps = {|
  ...LayoutCommonProps,
  direction: 'row' | 'column',
|};

const getSizesFromProps: (value: ?PropSizes) => string = R.cond([
  [R.equals('xs'), R.always('10px')],
  [R.equals('sm'), R.always('15px')],
  [R.equals('md'), R.always('20px')],
  [R.equals('lg'), R.always('30px')],
  [R.equals('xl'), R.always('40px')],
  [R.T, R.always('0')],
]);

const getGap: (props: LayoutProps) => string = ({ direction, gap }) =>
  direction === 'row'
    ? css`
        &:not(:last-child) {
          margin-right: ${getSizesFromProps(gap)};
        }
      `
    : css`
        &:not(:last-child) {
          margin-bottom: ${getSizesFromProps(gap)};
        }
      `;

const getPosition = ({ position }: LayoutProps) =>
  position
    ? css`
        position: ${position};
      `
    : '';

const LayoutBase = styled.div`
  display: flex;
  ${getPosition};
  flex-direction: ${R.prop('direction')};
  justify-content: ${(prop: LayoutProps) => contentStyles[prop.justifyContent]};
  align-items: ${(prop: LayoutProps) => itemsStyles[prop.alignItems]};
  align-content: ${(prop: LayoutProps) => contentStyles[prop.alignContent]};
  flex: ${R.propOr(undefined, 'flex')};
  padding-left: ${({ offsetX, offsetLeft }: LayoutProps) => getSizesFromProps(offsetX || offsetLeft)};
  padding-right: ${({ offsetX, offsetRight }: LayoutProps) => getSizesFromProps(offsetX || offsetRight)};
  padding-top: ${({ offsetY, offsetTop }: LayoutProps) => getSizesFromProps(offsetY || offsetTop)};
  padding-bottom: ${({ offsetY, offsetBottom }: LayoutProps) => getSizesFromProps(offsetY || offsetBottom)};
  box-sizing: ${({ borderBox }: LayoutProps) => (borderBox ? 'border-box' : 'initial')};
  & > * {
    ${(props: LayoutProps) => (props.gap ? getGap(props) : '')}
  }
`;

const layoutDefaultProps = {
  justifyContent: 'start',
  alignContent: 'start',
  alignItems: 'stretch',
};

const Layout = ({ children, ...rest }: LayoutProps) => <LayoutBase {...rest}>{children}</LayoutBase>;
Layout.defaultProps = {
  direction: 'row',
  ...layoutDefaultProps,
};

/** component provides interface to render flex row */
const Row = (props: LayoutCommonProps) => <Layout {...props} direction="row" />;
Row.defaultProps = layoutDefaultProps;

/** component provides interface to render flex column */

const Column = (props: LayoutCommonProps) => <Layout {...props} direction="column" />;
Column.defaultProps = layoutDefaultProps;

export { Row, Column, Layout };
