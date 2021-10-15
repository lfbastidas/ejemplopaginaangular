import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContenidosComponent } from './list-contenidos.component';

describe('ListContenidosComponent', () => {
  let component: ListContenidosComponent;
  let fixture: ComponentFixture<ListContenidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContenidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
