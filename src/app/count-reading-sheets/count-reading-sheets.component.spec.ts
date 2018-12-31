import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountReadingSheetsComponent } from './count-reading-sheets.component';

describe('CountReadingSheetsComponent', () => {
  let component: CountReadingSheetsComponent;
  let fixture: ComponentFixture<CountReadingSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountReadingSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountReadingSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
