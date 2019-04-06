import { TableDisplayedColumn } from '@app/shared/components/templates/table-common/table-common.component';
import * as R from 'ramda';

// COMMON

const getValue = R.prop('value');

const saveToLower = R.cond([
  [R.isNil, R.always('')],
  [R.T, R.toLower],
]);

/// DATE

const getDateString = (date) => new Date(date).toLocaleDateString();

export const createFilterByDate: (filters: object) => (column: TableDisplayedColumn) => (data: object) => boolean =
  (filters: object) => (column: TableDisplayedColumn) => (data) => {
    const name = getValue(column);
    if (!filters[name] || R.isEmpty(filters[name])) {
      return true;
    }
    return R.equals(getDateString(data[name]), getDateString(filters[name]));
  };

/// SELECT

export const createFilterBySelectMultiple: (filters: object) => (column: TableDisplayedColumn) => (data: object) => boolean =
  (filters: object) => (column: TableDisplayedColumn) => (data) => {
    const name = getValue(column);
    if (!filters[name] || R.isEmpty(filters[name])) {
      return true;
    }
    return R.pipe(
      R.prop(name),
      R.any(R.equals(data[name])),
    )(filters);
  };


/// INPUT

const getFilterValue: (name: string) => (filters: object) => string =
  (name) => R.pipe(
    R.prop(name),
    saveToLower,
  );

const isCurrentFilterEmpty: (name: string) => (filters: object) => (data: object) => (() => boolean) =
  (name) => R.pipe(
    R.prop(name),
    R.isNil,
    R.always,
  );

export const isCurrentFieldContainsCurrentFilterValue: (filters: object) => (name: string) => (data: object) => boolean =
  (filters) => (name) => R.pipe(
    R.prop(name),
    saveToLower,
    R.trim,
    R.contains(getFilterValue(name)(filters)),
  );


export const createFilterByInputValue: (filters: object) => (column: TableDisplayedColumn) => (data: object) => boolean =
  (filters) => R.pipe(
    getValue,
    R.cond([
      [isCurrentFilterEmpty(R.__)(filters), R.T],
      [R.T, isCurrentFieldContainsCurrentFilterValue(filters)],
    ]),
  );


/// GENERATOR

const createFilterFunctionFromColumnType: (filters: object) => (column: TableDisplayedColumn) => (data: object) => boolean =
  (filters) => R.cond([
    [R.propEq('control_type', 'dropdown'), createFilterBySelectMultiple(filters)],
    [R.propEq('control_type', 'datepicker'), createFilterByDate(filters)],
    [R.T, createFilterByInputValue(filters)],
  ]);

/* tslint:disable */
export const filterByPredicate: (columns: TableDisplayedColumn[]) => (data, filters) => boolean =
  (columns) => (data, filters) => R.allPass(
    R.map(
      createFilterFunctionFromColumnType(filters)
    )(columns)
  )(data);
