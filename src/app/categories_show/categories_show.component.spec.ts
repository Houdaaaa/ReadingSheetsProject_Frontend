import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categories_showComponent } from './categories_show.component';

describe('Categories_showComponent', () => {
  let component: Categories_showComponent;
  let fixture: ComponentFixture<Categories_showComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categories_showComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categories_showComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
