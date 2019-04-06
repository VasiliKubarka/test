import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component, ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges, OnInit,
  Output,
  QueryList,
  TemplateRef, ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CommonListActionsComponent } from '@app/shared/components/molecules/common-list-actions/common-list-actions.component';
import * as R from 'ramda';

import { filterByPredicate } from './table-common.utils';

export interface TableDisplayedColumn {
  value: string;
  label: string;
  control_type: string;
}
const getFormControls = R.pipe(
  R.map(({ value }) => ({ [value]: '' })),
  R.mergeAll,
);

@Component({
  selector: 'app-table-common',
  templateUrl: './table-common.component.html',
  styleUrls: ['./table-common.component.scss'],
})
export class TableCommonComponent implements OnInit, OnChanges, AfterViewInit {

  filterForm: FormGroup = new FormGroup({});

  @Input() selectedItems: SelectionModel<any>;

  @Input() columnNameWithClearAllFilter = 'actions';
  @Input() columnNamesWithoutSorting = ['actions', 'select'];
  @Input() showPaginator = true;
  @Input() paginatorOptions: number[] = [10, 25, 50];
  @Input() expandedRowsList: any[];
  @Input() dataSource: MatTableDataSource<any>;
  @Input() displayedColumnsData: TableDisplayedColumn[];
  @Input() loading = false;
  @Input() uniqueClassNameFunction: (object) => string;

  @Output() clickRow = new EventEmitter<object>();


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ContentChild(CommonListActionsComponent) listActionsComponent: CommonListActionsComponent;
  @ContentChildren(TemplateRef) renderTemplates !: QueryList<TemplateRef<any>>;


  get displayedColumns() {

    if (!this.displayedColumnsData) {
      return null;
    }
    return R.map(R.prop('value'), this.displayedColumnsData);
  }

  get showNoTableData() {
    return !this.loading && this.dataSource && R.isEmpty(this.dataSource.data);
  }

  get showNoMatchesFound() {
    return !this.showNoTableData && this.dataSource && R.isEmpty(this.dataSource.filteredData);
  }

  get allValuesSelected() {
    const filteredData = this.dataSource ? this.dataSource.filteredData : [];
    const allSelected = R.pipe(
      R.prop('selected'),
      R.intersection(filteredData),
      R.equals(filteredData),
    )(this.selectedItems);
    return allSelected && !R.isEmpty(filteredData);
  }

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    if (this.displayedColumnsData) {
      this.createFilterFormControls();
    }
  }

  ngOnChanges() {
    if (this.dataSource) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.createFilterPredicate();
    }
    if (this.displayedColumnsData) {
      this.createFilterFormControls();
    }
  }

  ngAfterViewInit() {
    if (this.dataSource && this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  toggleSelectAllButton(event) {
    event.checked
      ? this.selectedItems.select(...this.dataSource.filteredData)
      : this.selectedItems.clear();
  }

  getFieldTemplate(name) {
    return this.renderTemplates.find(R.pipe(
      R.path(['_def', 'references']),
      R.keys,
      R.head,
      R.equals(name),
    ));
  }

  createFilterFormControls() {
    this.filterForm = this.fb.group(
      getFormControls(this.displayedColumnsData),
    );

    this.filterForm.valueChanges.subscribe((formData) => {
      this.dataSource.filter = formData;
      this.checkPageCountOnFilterData();
    });
  }

  checkPageCountOnFilterData() {
    const filteredDataLength = this.dataSource.filteredData.length;
    if (filteredDataLength) {
      const lastPage = Math.ceil(filteredDataLength / this.paginator.pageSize) - 1;
      if (lastPage < this.paginator.pageIndex) {
        this.paginator.firstPage();
      }
    }
  }

  createFilterPredicate() {
    this.dataSource.filterPredicate = filterByPredicate(this.displayedColumnsData);
  }

  removeFilter(name: string) {
    this.filterForm.get(name).patchValue('');
  }

  getColumnOptions(name: string) {
      return R.pipe(
        R.prop('data'),
        R.cond([
          [R.isNil, R.always([])],
          [R.T, R.map(R.prop(name))],
        ]),
        R.uniq,
      )(this.dataSource);
  }

  shouldDisplayExpandedRow(data): boolean {
    return this.expandedRowsList && R.contains(data, this.expandedRowsList);
  }

  disableSortingForCurrentColumn(column: TableDisplayedColumn) {
    return R.contains(column.value, this.columnNamesWithoutSorting);
  }

  resetFilters() {
    this.filterForm.reset();
  }
}
