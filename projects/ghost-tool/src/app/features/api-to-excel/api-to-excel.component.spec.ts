import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiToExcelComponent } from './api-to-excel.component';

describe('ApiToExcelComponent', () => {
  let component: ApiToExcelComponent;
  let fixture: ComponentFixture<ApiToExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiToExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiToExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
