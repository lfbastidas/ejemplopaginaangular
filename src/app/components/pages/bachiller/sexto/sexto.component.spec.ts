import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SextoComponent } from './sexto.component';

describe('SextoComponent', () => {
  let component: SextoComponent;
  let fixture: ComponentFixture<SextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
