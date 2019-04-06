import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtomsModule } from '@app/shared/components/atoms/atoms.module';
import { MaterialModule } from '@app/shared/material/material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { PrimaryButtonComponent } from './primary-button/primary-button.component';

@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    MaterialModule,
    AtomsModule,
  ],
  declarations: [
    PrimaryButtonComponent,
  ],
  exports: [
    PrimaryButtonComponent,
  ],
})
export class ButtonsModule { }
