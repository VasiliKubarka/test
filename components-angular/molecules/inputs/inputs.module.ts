import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AtomsModule } from '@app/shared/components/atoms/atoms.module';
import { DateTimeModule } from '@app/shared/date-time/date-time.module';
import { MaterialModule } from '@app/shared/material/material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialFileInputModule } from 'ngx-material-file-input';

import { CheckboxComponent } from './checkbox/checkbox.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { CustomFileUploadComponent } from './custom-file-upload/custom-file-upload.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { DateComponent } from './date/date.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { SwitchTextComponent } from './switch-text/switch-text.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    MaterialModule,
    ColorPickerModule,
    FlexLayoutModule,
    MaterialFileInputModule,
    NgxMaskModule.forRoot(),
    AtomsModule,
    DateTimeModule,
  ],
  declarations: [
    InputComponent,
    FileUploadComponent,
    SelectComponent,
    CustomFileUploadComponent,
    TextareaComponent,
    DateComponent,
    SwitchTextComponent,
    ColorPickerComponent,
    CheckboxComponent,
    RadioComponent,
    DateTimeComponent,
  ],
  exports: [
    InputComponent,
    FileUploadComponent,
    SelectComponent,
    CustomFileUploadComponent,
    TextareaComponent,
    DateComponent,
    SwitchTextComponent,
    ColorPickerComponent,
    CheckboxComponent,
    RadioComponent,
    DateTimeComponent,
  ],
})
export class InputsModule { }
