import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContenidosComponent } from './new-contenidos.component';

describe('NewContenidosComponent', () => {
  let component: NewContenidosComponent;
  let fixture: ComponentFixture<NewContenidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewContenidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
