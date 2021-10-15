import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BachillerComponent } from './bachiller.component';

describe('BachillerComponent', () => {
  let component: BachillerComponent;
  let fixture: ComponentFixture<BachillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BachillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
