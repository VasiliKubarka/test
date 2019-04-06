// @flow

import * as React from 'react';
import styled, { type ReactComponentStyled } from 'styled-components';
import { FONTS, THEME_COLORS } from 'styles';
import * as R from 'ramda';

type BaseTextProp = {|
  children?: React$Node,
  color: string,
  bold?: boolean,
  boldest?: boolean,
  light?: boolean,
  black?: boolean,
|};

const getFontWeight: (props: BaseTextProp) => number = R.cond([
  [R.propEq('black', true), R.always(900)],
  [R.propEq('boldest', true), R.always(800)],
  [R.propEq('bold', true), R.always(600)],
  [R.propEq('light', true), R.always(200)],
  [R.T, R.always(400)],
]);

const Header1Base = styled.h1`
  font-family: ${FONTS.primary};
  font-size: 36px;
  font-weight: ${getFontWeight};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${R.prop('color')};
`;

const H1 = ({ children, ...rest }: BaseTextProp) => <Header1Base {...rest}>{children}</Header1Base>;
H1.defaultProps = {
  color: THEME_COLORS.defaultText,
};
H1.BaseWrapper = Header1Base;

const Header2Base = styled.h2`
  font-family: ${FONTS.primary};
  font-size: 24px;
  font-weight: ${getFontWeight};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${R.prop('color')};
`;

const H2 = ({ children, ...rest }: BaseTextProp) => <Header2Base {...rest}>{children}</Header2Base>;
H2.defaultProps = {
  color: THEME_COLORS.defaultText,
};
H2.BaseWrapper = Header2Base;

const Header3Base = styled.h3`
  font-family: ${FONTS.primary};
  font-size: 20px;
  font-weight: ${getFontWeight};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${R.prop('color')};
`;

const H3 = ({ children, ...rest }: BaseTextProp) => <Header3Base {...rest}>{children}</Header3Base>;
H3.defaultProps = {
  color: THEME_COLORS.defaultText,
};
H3.BaseWrapper = Header3Base;

export type ParagraphType = {|
  ...BaseTextProp,
  noMargin: boolean,
  lg?: boolean,
  sm?: boolean,
  space?: boolean,
  uppercase: boolean,
|};

const getFontSizeForP: (props: ParagraphType) => number = R.cond([
  [R.has('lg'), R.always(16)],
  [R.has('sm'), R.always(12)],
  [R.T, R.always(14)],
]);

const Paragraph: ReactComponentStyled<ParagraphType> = styled.p`
  font-family: ${FONTS.primary};
  font-size: ${getFontSizeForP}px;
  font-weight: ${getFontWeight};
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: ${({ space }: ParagraphType) => (space ? '1px' : 'normal')};
  margin: ${({ noMargin }: ParagraphType) => (noMargin ? '0' : '7px 0')};
  text-transform: ${({ uppercase }: ParagraphType) => (uppercase ? 'uppercase' : 'none')};
  color: ${R.prop('color')};
`;

const P = ({ children, ...rest }: ParagraphType) => <Paragraph {...rest}>{children}</Paragraph>;
P.defaultProps = {
  color: THEME_COLORS.defaultText,
  bold: false,
  boldest: false,
  space: false,
  noMargin: false,
  uppercase: false,
};
P.BaseWrapper = Paragraph;

export { H1, H2, H3, P };
