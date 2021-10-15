import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftSheetComponent } from './microsoft-sheet.component';

describe('MicrosoftSheetComponent', () => {
  let component: MicrosoftSheetComponent;
  let fixture: ComponentFixture<MicrosoftSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrosoftSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosoftSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
