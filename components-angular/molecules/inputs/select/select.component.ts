import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { DEFAULT_CONTROL_NAME, DEFAULT_FORM_GROUP, InputErrorStateMatcher } from '@app/shared/components/componentUtils';
import { SelectOption } from '@app/shared/components/molecules/inputs/inputs.models';
import * as R from 'ramda';

export interface SelectDataChange {
  value: string;
  previousValue: string;
}

const containsString = (input) => R.pipe(
  R.prop('label'),
  R.trim,
  R.toLower,
  R.contains(R.toLower(input)),
);

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {

  matcher: ErrorStateMatcher;
  @Input() toolTip = '';
  @Input() formGroup: FormGroup = DEFAULT_FORM_GROUP;
  @Input() name = DEFAULT_CONTROL_NAME;
  @Input() required = false;
  @Input() placeholder: string;
  @Input() value: string = null;
  @Output() dataChanges = new EventEmitter<SelectDataChange>();
  @Input() options: SelectOption[] = [];
  @Input() multiple = false;
  @Input() hideEmptyOption = false;
  @Input() formErrors: string[] = null;
  searchInput = '';

  get control() {
    return this.formGroup.get(this.name);
  }

  valueChanged(value) {
    const newData: SelectDataChange = {
      value,
      previousValue: this.control.value,
    };
    this.dataChanges.emit(newData);
  }
  ngOnInit() {
    this.matcher = new InputErrorStateMatcher(this.formErrors);
  }

  get filteredOptions() {

    if (this.options && this.searchInput) {
      return R.filter(containsString(this.searchInput), this.options);
    }
    return this.options || [];

  }

  clearSearch() {
    this.searchInput = '';
  }

}
