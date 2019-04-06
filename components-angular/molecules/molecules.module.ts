import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AtomsModule } from '@app/shared/components/atoms/atoms.module';
import { MaterialModule } from '@app/shared/material/material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AccordionComponent } from './accordion/accordion.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonsModule } from './buttons/buttons.module';
import { CommonListActionsItemComponent } from './common-list-actions/common-list-actions-item/common-list-actions-item.component';
import { CommonListActionsComponent } from './common-list-actions/common-list-actions.component';
import { CustomSearchMenuComponent } from './custom-search-menu/custom-search-menu.component';
import { DataDistributorModule } from './data-distributor/data-distributor.module';
import { FinderComponent } from './finder/finder.component';
import { InputsModule } from './inputs/inputs.module';
import { MenuComponent } from './menu/menu.component';
import { MultiselectSearchMenuComponent } from './multiselect-search-menu/multiselect-search-menu.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';
import { TagProgressComponent } from './tag-progress/tag-progress.component';

@NgModule({
  imports: [
    AtomsModule,
    AngularSvgIconModule,
    ButtonsModule,
    CommonModule,
    DataDistributorModule,
    FlexLayoutModule,
    InputsModule,
    MaterialModule,
    RouterModule,
  ],
  declarations: [
    AccordionComponent,
    BreadcrumbsComponent,
    CommonListActionsComponent,
    CommonListActionsItemComponent,
    CustomSearchMenuComponent,
    MultiselectSearchMenuComponent,
    MenuComponent,
    SearchMenuComponent,
    TagProgressComponent,
    FinderComponent,
    SearchListComponent,
  ],
  exports: [
    AccordionComponent,
    ButtonsModule,
    BreadcrumbsComponent,
    CommonListActionsItemComponent,
    CustomSearchMenuComponent,
    CommonListActionsComponent,
    DataDistributorModule,
    InputsModule,
    MenuComponent,
    MultiselectSearchMenuComponent,
    SearchMenuComponent,
    TagProgressComponent,
    FinderComponent,
    SearchListComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
})
export class MoleculesModule { }
