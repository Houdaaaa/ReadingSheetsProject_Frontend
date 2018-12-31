import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingSheetEditComponent } from './reading-sheet-edit.component';

describe('ReadingSheetEditComponent', () => {
  let component: ReadingSheetEditComponent;
  let fixture: ComponentFixture<ReadingSheetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingSheetEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingSheetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
