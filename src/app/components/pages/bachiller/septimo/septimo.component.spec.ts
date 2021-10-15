import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptimoComponent } from './septimo.component';

describe('SeptimoComponent', () => {
  let component: SeptimoComponent;
  let fixture: ComponentFixture<SeptimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeptimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeptimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
