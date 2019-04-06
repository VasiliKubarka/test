import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AddButtonComponent } from '@app/shared/components/atoms/add-button/add-button.component';
import { MaterialModule } from '@app/shared/material/material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AvatarComponent } from './avatar/avatar.component';
import { CardComponent } from './card/card.component';
import { CopyFieldComponent } from './copy-field/copy-field.component';
import { DownloadComponent } from './download/download.component';
import { InputErrorsComponent } from './input-errors/input-errors.component';
import { InputModalMarginComponent } from './input-modal-margin/input-modal-margin.component';
import { LoaderComponent } from './loader/loader.component';
import { RowComponent } from './row/row.component';
import { TextTruncateComponent } from './text-truncate/text-truncate.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    AngularSvgIconModule,
    FlexLayoutModule,
  ],
  declarations: [
    CopyFieldComponent,
    LoaderComponent,
    RowComponent,
    InputErrorsComponent,
    InputModalMarginComponent,
    DownloadComponent,
    AvatarComponent,
    TextTruncateComponent,
    CardComponent,
    AddButtonComponent,
  ],
  exports: [
    CopyFieldComponent,
    LoaderComponent,
    RowComponent,
    InputErrorsComponent,
    InputModalMarginComponent,
    DownloadComponent,
    AvatarComponent,
    TextTruncateComponent,
    CardComponent,
    AddButtonComponent,
  ],
})
export class AtomsModule { }
