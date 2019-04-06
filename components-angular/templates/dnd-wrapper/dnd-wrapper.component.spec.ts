import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndWrapperComponent } from './dnd-wrapper.component';

describe('DndWrapperComponent', () => {
  let component: DndWrapperComponent;
  let fixture: ComponentFixture<DndWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndWrapperComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
