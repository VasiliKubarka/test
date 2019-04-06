import { NgModule } from '@angular/core';

import { AtomsModule } from '@app/shared/components/atoms/atoms.module';
import { MoleculesModule } from '@app/shared/components/molecules/molecules.module';
import { OrganismsModule } from '@app/shared/components/organisms/organisms.module';
import { PagesModule } from '@app/shared/components/pages/pages.module';
import { TemplatesModule } from '@app/shared/components/templates/templates.module';

@NgModule({
  imports: [
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
    PagesModule,
  ],
  exports: [
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
    PagesModule,
  ],
})
export class ComponentsModule { }
