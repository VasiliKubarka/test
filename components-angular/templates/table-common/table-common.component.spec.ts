import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplatesModule } from '@app/shared/components/templates/templates.module';

import { TableCommonComponent } from './table-common.component';


xdescribe('TableCommonComponent', () => {

  let component: TableCommonComponent;
  let fixture: ComponentFixture<TableCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TemplatesModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
