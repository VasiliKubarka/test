import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { DEFAULT_CONTROL_NAME, DEFAULT_FORM_GROUP, InputErrorStateMatcher } from '@app/shared/components/componentUtils';
import * as R from 'ramda';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {


  defaultMaskForCurrentType: string;
  matcher: ErrorStateMatcher;
  input;

  @Input() formGroup: FormGroup = DEFAULT_FORM_GROUP;
  @Input() type: 'text' | 'number' | 'url' | 'email' | 'password' | 'tel' = 'text';
  @Input() name = DEFAULT_CONTROL_NAME;
  @Input() required = false;
  @Input() placeholder: string;
  @Input() value: string = null;
  @Input() mask: string = null;
  @Input() formErrors: string[] = null;
  @Input() iconUrl: string = null;
  @Input() maxlength = 50;
  @Input() showMaxLength = false;
  @Input() hint: string;
  @Input() min: number;
  @Input() max: number;
  @Input() allowDecimals = true;
  @Output() blur = new EventEmitter<MouseEvent>();

  get control(): AbstractControl {
    return this.formGroup.get(this.name);
  }

  ngOnInit() {
    if (this.isEmptyCheckRequired) {
      this.applyEmptyCheckValidation();
    }
    if (this.type === 'tel') { this.defaultMaskForCurrentType = '+000(00)-000-00-00'; }
    this.matcher = new InputErrorStateMatcher(this.formErrors);
    this.subscribeValueChanges();
  }

  get canHasMask() {
    return this.type === 'text' || this.type === 'tel';
  }

  get isEmptyCheckRequired() {
    return this.control && this.required && this.type === 'text';
  }
  applyEmptyCheckValidation() {
    this.control.setValidators([this.control.validator, this.noWhitespaceValidator]);
    this.control.updateValueAndValidity();
  }
  checkMinMaxValuesForNumber() {
    // wait for user to enter some values
        const val = this.control.value;
        if (this.type === 'number') {
          if (val && !R.isNil(this.min) && Number(val) < this.min) {
            this.control.patchValue(this.min);
          }
          if (val && !R.isNil(this.max) && Number(val) > this.max) {
            this.control.patchValue(this.max);
          }
      }
  }

  noWhitespaceValidator(control: AbstractControl) {
    const isWhitespace = String((control.value || '')).trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { custom: 'Only spaces are not allowed' };
  }

  subscribeValueChanges() {
    this.control.valueChanges.subscribe(
      (val) => {
        this.checkIsDecimalAllowed(val);
        this.checkMinMaxValuesForNumber();
      },
    );
  }
  checkIsDecimalAllowed(val) {
    if (this.type === 'number' && !this.allowDecimals) {
      if (val && Number(val) % 1 !== 0) {
        this.control.patchValue(Math.round(Number(val)));
      }
    }
  }
}
