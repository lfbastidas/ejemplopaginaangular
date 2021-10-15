import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimoComponent } from './decimo.component';

describe('DecimoComponent', () => {
  let component: DecimoComponent;
  let fixture: ComponentFixture<DecimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
