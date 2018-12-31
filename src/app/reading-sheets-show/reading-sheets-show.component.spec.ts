import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingSheetsShowComponent } from './reading-sheets-show.component';

describe('ReadingSheetsShowComponent', () => {
  let component: ReadingSheetsShowComponent;
  let fixture: ComponentFixture<ReadingSheetsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingSheetsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingSheetsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
