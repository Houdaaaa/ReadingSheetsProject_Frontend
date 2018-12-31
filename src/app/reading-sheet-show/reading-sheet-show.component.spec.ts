import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingSheetShowComponent } from './reading-sheet-show.component';

describe('ReadingSheetShowComponent', () => {
  let component: ReadingSheetShowComponent;
  let fixture: ComponentFixture<ReadingSheetShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingSheetShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingSheetShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
