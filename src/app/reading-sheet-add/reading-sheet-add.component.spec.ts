import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingSheetAddComponent } from './reading-sheet-add.component';

describe('ReadingSheetAddComponent', () => {
  let component: ReadingSheetAddComponent;
  let fixture: ComponentFixture<ReadingSheetAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingSheetAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingSheetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
