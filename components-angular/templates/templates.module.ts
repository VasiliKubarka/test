import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AtomsModule } from '@app/shared/components/atoms/atoms.module';
import { MoleculesModule } from '@app/shared/components/molecules/molecules.module';
import { OrganismsModule } from '@app/shared/components/organisms/organisms.module';
import { ContentHeadTemplateComponent } from '@app/shared/components/templates/content-head-template/content-head-template.component';
import { MaterialModule } from '@app/shared/material/material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { ContentViewTemplateComponent } from './content-view-template/content-view-template.component';
import { CustomAccordionComponent } from './custom-accordion/custom-accordion.component';
import { CustomDndWrapperComponent } from './custom-dnd-wrapper/custom-dnd-wrapper.component';
import { DndWrapperComponent } from './dnd-wrapper/dnd-wrapper.component';
import { PaginatorComponent } from './manual-common-table/component/paginator/paginator.component';
import { ManualCommonTableComponent } from './manual-common-table/manual-common-table.component';
import { ModalComponent } from './modal/modal.component';
import { NoDataComponent } from './no-data/no-data.component';
import { TableCommonComponent } from './table-common/table-common.component';
import { TableSelectComponent } from './table-select/table-select.component';
import { UserIdleModalComponent } from './user-idle-modal/user-idle-modal.component';

@NgModule({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    MaterialModule,
    FlexLayoutModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
  ],
  declarations: [
    DndWrapperComponent,
    ModalComponent,
    TableCommonComponent,
    NoDataComponent,
    TableSelectComponent,
    ManualCommonTableComponent,
    PaginatorComponent,
    CustomDndWrapperComponent,
    ContentViewTemplateComponent,
    ContentHeadTemplateComponent,
    CustomAccordionComponent,
    UserIdleModalComponent,
    CustomAccordionComponent,
  ],
  exports: [
    DndWrapperComponent,
    ModalComponent,
    TableCommonComponent,
    NoDataComponent,
    TableSelectComponent,
    ManualCommonTableComponent,
    CustomDndWrapperComponent,
    ContentViewTemplateComponent,
    ContentHeadTemplateComponent,
    CustomAccordionComponent,
  ],
})
export class TemplatesModule { }
