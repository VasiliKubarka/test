// @flow

import * as React from 'react';
import styled from 'styled-components';
import { InputWrapperStyled, InputBaseStyled, InputLeftIconStyled, InputRightIconStyled } from './Input.Style';
import { CloseSvg } from 'images';
import { Loader } from 'components/atoms/loader';
import { THEME_COLORS } from 'styles';
import { setNativeValue } from 'utils/common';

type InputBaseAlignType = 'center' | 'left' | 'right';
type InputBaseTypesType = 'text' | 'number' | 'password' | 'email' | 'url';
type InputBaseKindType = 'bordered' | 'underline' | 'transparent';

type InputCommonProps = {|
  placeholder?: string,
  autoComplete?: boolean,
  disabled?: boolean,
  stretch?: boolean,
  hideErrorIndicator?: boolean,
  align?: InputBaseAlignType,
  leftIcon?: React$Node,
  maxLength?: number,
  insideRef?: HTMLInputElement => void,
  kind?: InputBaseKindType,
  readOnly?: boolean,
  clearable: boolean,
  loading?: boolean,
  type?: InputBaseTypesType,
  mask?: string,
  width?: number,
|};

type InputProps = {|
  ...InputCommonProps,
  name: string,
  onChange?: (SyntheticInputEvent<HTMLInputElement>) => void,
  onFocus?: (SyntheticFocusEvent<HTMLInputElement>) => void,
  onBlur?: (SyntheticFocusEvent<HTMLInputElement>) => void,
  value?: any,
  checked?: boolean,

  active?: boolean,
  data?: Object,
  dirty?: boolean,
  dirtySinceLastSubmit?: boolean,
  error?: any,
  initial?: any,
  invalid?: boolean,
  pristine?: boolean,
  submitError?: any,
  submitFailed?: boolean,
  submitSucceeded?: boolean,
  submitting?: boolean,
  touched?: boolean,
  valid?: boolean,
  visited?: boolean,
|};

const InputClearButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${THEME_COLORS.pale};
  cursor: pointer;
  svg:hover {
    fill: ${THEME_COLORS.primary};
  }
`;

const InputBase = (props: InputProps) => {
  const {
    align,
    autoComplete,
    insideRef,
    leftIcon,
    onChange,
    onBlur,
    onFocus,
    placeholder,
    width,
    stretch,
    error,
    type,
    value,
    name,
    kind,
    disabled,
    readOnly,
    clearable,
    loading,
  } = props;

  const hasRightIcon = (clearable || !!loading) && !readOnly && !disabled;

  const inputProps = {
    align,
    autoComplete: autoComplete ? 'on' : 'off',
    hasLeftIcon: !!leftIcon,
    error,
    hasRightIcon,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    width,
    type,
    value,
    insideRef,
    name,
    kind,
    disabled,
    readOnly,
  };

  const inputRef: { current: any } = React.createRef();

  const clearInput = (event: SyntheticMouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (inputRef.current) {
      setNativeValue(inputRef.current, '');
      inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
      inputRef.current.focus();
    }
  };

  return (
    <InputWrapperStyled stretch={stretch} width={width}>
      <InputBaseStyled {...inputProps} ref={inputRef} />
      <If condition={!!leftIcon}>
        <InputLeftIconStyled>{leftIcon}</InputLeftIconStyled>
      </If>
      <If condition={hasRightIcon}>
        <InputRightIconStyled>
          <Loader loading={loading} size="sm">
            <If condition={clearable && !!value}>
              <InputClearButton onClick={clearInput}>
                <CloseSvg fill={THEME_COLORS.secondaryText} height={24} />
              </InputClearButton>
            </If>
          </Loader>
        </InputRightIconStyled>
      </If>
    </InputWrapperStyled>
  );
};
InputBase.defaultProps = {
  align: 'left',
  autoComplete: false,
  hideErrorIndicator: false,
  stretch: true,
  type: 'text',
  kind: 'bordered',
  clearable: true,
};
InputBase.displayName = 'Input.Base';

export { InputBase };
export type { InputCommonProps, InputProps, InputBaseAlignType, InputBaseTypesType, InputBaseKindType };
