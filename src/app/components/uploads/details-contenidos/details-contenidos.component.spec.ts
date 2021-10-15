import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsContenidosComponent } from './details-contenidos.component';

describe('DetailsContenidosComponent', () => {
  let component: DetailsContenidosComponent;
  let fixture: ComponentFixture<DetailsContenidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsContenidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsContenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
