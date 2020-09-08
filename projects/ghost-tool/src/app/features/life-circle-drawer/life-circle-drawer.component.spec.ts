import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCircleDrawerComponent } from './life-circle-drawer.component';

describe('LifeCircleDrawerComponent', () => {
  let component: LifeCircleDrawerComponent;
  let fixture: ComponentFixture<LifeCircleDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCircleDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCircleDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
