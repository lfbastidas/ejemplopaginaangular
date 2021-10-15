import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContenidosComponent } from './edit-contenidos.component';

describe('EditContenidosComponent', () => {
  let component: EditContenidosComponent;
  let fixture: ComponentFixture<EditContenidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContenidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
