import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctavoComponent } from './octavo.component';

describe('OctavoComponent', () => {
  let component: OctavoComponent;
  let fixture: ComponentFixture<OctavoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctavoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctavoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
