// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
import { FONTS, THEME_COLORS } from 'styles';
import * as R from 'ramda';
import { Loader } from 'components/atoms/loader';
import type { ColorType } from 'components/utils';
import { colorInverse, getColorFromColorProp } from 'components/utils';

type ButtonProps = {|
  children: React$Node,
  size: 'auto' | 'sm' | 'md' | 'lg',
  renderIcon?: () => React$Node,
  color: ColorType,
  loading: boolean,
  disabled: boolean,
  onClick?: (e: MouseEvent) => any,
|};

const ButtonCommonDefaultProps = {
  size: 'auto',
  color: 'secondary',
  loading: false,
  disabled: false,
};

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const TextContainer = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const getPxSize: (size: number) => () => string = size => () => `${size}px`;

const getButtonWidthBySize: (props: ButtonProps) => string = R.cond([
  [R.propEq('size', 'sm'), getPxSize(100)],
  [R.propEq('size', 'md'), getPxSize(160)],
  [R.propEq('size', 'lg'), getPxSize(200)],
  [R.propEq('size', 'auto'), R.always('min-content')],
]);

const disabledProp = css`
  opacity: 0.5;
  pointer-events: none;
`;

const ButtonBase = styled.button`
  display: flex;
  height: 30px;
  width: ${getButtonWidthBySize};
  border-radius: 8px;
  border: 1px solid ${THEME_COLORS.border};
  background: ${getColorFromColorProp};
  padding: 0 7px;
  justify-content: space-between;
  outline: none;
  cursor: pointer;
  ${({ disabled }) => (disabled ? disabledProp : '')}
`;

const Button = ({ children, renderIcon, size, color, disabled, loading, onClick }: ButtonProps) => {
  return (
    <ButtonBase disabled={disabled} color={color} size={size} onClick={onClick}>
      <Loader loading={loading} size="sm" color={colorInverse(color)}>
        <If condition={!!renderIcon}>
          <IconContainer>{renderIcon && renderIcon()}</IconContainer>
        </If>
        <If condition={!!children}>
          <TextContainer>{children}</TextContainer>
        </If>
      </Loader>
    </ButtonBase>
  );
};
Button.BaseWrapper = ButtonBase;
Button.defaultProps = ButtonCommonDefaultProps;

const getTextDefaultColor: (props: ButtonProps) => string = R.cond([
  [R.propEq('color', 'primary'), R.always(THEME_COLORS.white)],
  [R.propEq('color', 'secondary'), R.always(THEME_COLORS.battleship)],
  [R.T, R.always(THEME_COLORS.battleship)],
]);

const TextDefault = styled.div`
  font-family: ${FONTS.primary};
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  color: ${getTextDefaultColor};
  text-transform: uppercase;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const ButtonTextDefault = ({ children, color, ...rest }: ButtonProps) => (
  <Button {...rest} color={color}>
    <TextDefault color={color}>{children}</TextDefault>
  </Button>
);
ButtonTextDefault.defaultProps = ButtonCommonDefaultProps;
ButtonTextDefault.displayName = 'Button.Text';

Button.Text = ButtonTextDefault;

export { Button, ButtonTextDefault };
