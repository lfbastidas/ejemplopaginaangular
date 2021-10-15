import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcComponent } from './modalc.component';

describe('ModalcComponent', () => {
  let component: ModalcComponent;
  let fixture: ComponentFixture<ModalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
