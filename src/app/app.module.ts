import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';

import { Categories_showComponent } from './categories_show/categories_show.component';
import { CategoryShowComponent } from './category-show/category-show.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { ReadingSheetsShowComponent } from './reading-sheets-show/reading-sheets-show.component';
import { ReadingSheetShowComponent } from './reading-sheet-show/reading-sheet-show.component';
import { ReadingSheetEditComponent } from './reading-sheet-edit/reading-sheet-edit.component';
import { ReadingSheetAddComponent } from './reading-sheet-add/reading-sheet-add.component';
import { HomeComponent } from './home/home.component';
import { CountReadingSheetsComponent } from './count-reading-sheets/count-reading-sheets.component';


@NgModule({
  declarations: [
    AppComponent,
    Categories_showComponent,
    CategoryShowComponent,
    CategoryEditComponent,
    CategoryAddComponent,
    ReadingSheetsShowComponent,
    ReadingSheetShowComponent,
    ReadingSheetEditComponent,
    ReadingSheetAddComponent,
    HomeComponent,
    CountReadingSheetsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
