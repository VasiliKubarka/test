// @flow

import * as R from 'ramda';
import { THEME_COLORS } from 'styles';
import type { FaultStatus } from 'apollo/schemaTypes';

export type ColorType = 'primary' | 'secondary';

export const colorInverse: (val: ColorType) => ColorType = R.cond([
  [R.equals('primary'), R.always('secondary')],
  [R.equals('secondary'), R.always('primary')],
]);

export const getColorFromProp: (val: ColorType) => string = R.cond([
  [R.equals('primary'), R.always(THEME_COLORS.primary)],
  [R.equals('secondary'), R.always(THEME_COLORS.white)],
  [R.T, R.always(THEME_COLORS.primary)],
]);

export const getColorFromColorProp: (val: { color: ColorType }) => string = R.pipe(
  R.prop('color'),
  getColorFromProp,
);

export const getFaultColorFromProp: (val: FaultStatus) => string = R.cond([
  [R.equals('ERROR'), R.always(THEME_COLORS.error)],
  [R.equals('WARNING'), R.always(THEME_COLORS.warning)],
  [R.T, R.always(THEME_COLORS.error)],
]);

export const getFaultColorFromStatusProp: (val: { status: FaultStatus }) => string = R.pipe(
  R.prop('status'),
  getFaultColorFromProp,
);
