import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovenoComponent } from './noveno.component';

describe('NovenoComponent', () => {
  let component: NovenoComponent;
  let fixture: ComponentFixture<NovenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
