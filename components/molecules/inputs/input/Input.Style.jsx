// @flow

import styled, { css } from 'styled-components';
import { THEME_COLORS } from 'styles';
import * as R from 'ramda';
import type { InputBaseAlignType, InputBaseTypesType, InputBaseKindType } from './Input.Base';

const iconsStyles = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30px;
`;

const InputLeftIconStyled = styled.div`
  ${iconsStyles};
  left: 6px;
`;

const InputRightIconStyled = styled.div`
  ${iconsStyles};
  right: 6px;
`;

type InputWrapperBaseProps = {|
  stretch?: boolean,
  width?: number,
  children: React$Node,
|};

const InputWrapperStyled: React$ComponentType<InputWrapperBaseProps> = styled.div`
  display: inline-flex;
  position: relative;
  width: ${({ stretch, width }: InputWrapperBaseProps) => (stretch && !width ? '100%' : 'auto')};
`;

type InputBaseStyledProps = {|
  align?: InputBaseAlignType,
  autoComplete: 'on' | 'off',
  hasLeftIcon: boolean,
  hasRightIcon: boolean,
  error?: any,
  onChange?: (SyntheticInputEvent<HTMLInputElement>) => void,
  onFocus?: (SyntheticFocusEvent<HTMLInputElement>) => void,
  onBlur?: (SyntheticFocusEvent<HTMLInputElement>) => void,
  placeholder?: string,
  width?: number,
  type?: InputBaseTypesType,
  value?: ?string | ?number,
  insideRef?: HTMLInputElement => void,
  name?: string,
  kind?: InputBaseKindType,
  disabled?: boolean,
  readOnly?: boolean,
|};

const getInputBaseBorderedStyles = ({ disabled, readOnly }: InputBaseStyledProps) => css`
  border: 1px solid;
  border-radius: 5px;
  background: ${disabled || readOnly ? THEME_COLORS.pale : THEME_COLORS.white};
`;

const getInputBaseUnderlineStyles = () => css`
  border: 0;
  border-bottom: 1px solid;
  background: transparent;
`;

const getInputBaseTransparentStyles = () => css`
  border: 0;
  background: transparent;
`;

const getInputBaseStylesFromKind: (props: InputBaseStyledProps) => string = R.cond([
  [R.propEq('kind', 'bordered'), getInputBaseBorderedStyles],
  [R.propEq('kind', 'underline'), getInputBaseUnderlineStyles],
  [R.propEq('kind', 'transparent'), getInputBaseTransparentStyles],
  [R.T, getInputBaseBorderedStyles],
]);

const getInputBaseBorderStylesColors: (props: InputBaseStyledProps) => string = ({
  error,
  disabled,
  readOnly,
}: InputBaseStyledProps) => css`
  border-color: ${error ? `${THEME_COLORS.error} !important` : THEME_COLORS.paleGray};
  &:focus {
    border-color: ${disabled || readOnly ? THEME_COLORS.paleGray : THEME_COLORS.primary};
  }
`;

const getInputBaseStyles = ({
  width,
  hasLeftIcon,
  hasRightIcon,
  disabled,
  readOnly,
  align,
}: InputBaseStyledProps) => css`
  width: ${width ? `${width}px` : '100%'};
  padding-left: ${hasLeftIcon ? '36px' : '6px'};
  padding-right: ${hasRightIcon ? '36px' : '6px'};
  text-align: ${align};
`;

const InputBaseStyled: React$ComponentType<InputBaseStyledProps> = styled.input`
  ${getInputBaseStyles}
  ${getInputBaseStylesFromKind}
  ${getInputBaseBorderStylesColors}
  color: ${THEME_COLORS.defaultText};
  font-size: 16px;
  height: 30px;
  transition: all 0.15s ease-in-out;

  &::placeholder {
    color: ${THEME_COLORS.secondaryText};
  }

  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-ms-clear {
    display: none;
  }
`;

export { InputWrapperStyled, InputBaseStyled, InputRightIconStyled, InputLeftIconStyled };
export type { InputBaseStyledProps, InputBaseAlignType, InputBaseTypesType, InputBaseKindType };
