import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContenidosSextoaComponent } from './list-contenidos-sextoa.component';

describe('ListContenidosSextoaComponent', () => {
  let component: ListContenidosSextoaComponent;
  let fixture: ComponentFixture<ListContenidosSextoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContenidosSextoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContenidosSextoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
