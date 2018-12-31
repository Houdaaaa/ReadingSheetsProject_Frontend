import { RouterModule, Routes } from '@angular/router';
import { NgModule }             from '@angular/core';

import { Categories_showComponent } from './categories_show/categories_show.component';
import { CategoryShowComponent } from './category-show/category-show.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryAddComponent } from './category-add/category-add.component';

import {ReadingSheetsShowComponent} from './reading-sheets-show/reading-sheets-show.component';
import {ReadingSheetShowComponent} from './reading-sheet-show/reading-sheet-show.component';
import {ReadingSheetEditComponent} from './reading-sheet-edit/reading-sheet-edit.component';
import {ReadingSheetAddComponent} from './reading-sheet-add/reading-sheet-add.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'categories', component: Categories_showComponent },
  { path: 'category/:title', component: CategoryShowComponent },
  { path: 'category/:title/edit', component: CategoryEditComponent },
  { path: 'addCategory', component: CategoryAddComponent },

  { path: 'readingSheets', component: ReadingSheetsShowComponent },
  { path: 'readingSheet/:id', component: ReadingSheetShowComponent },
  { path: 'readingSheet/:id/edit', component: ReadingSheetEditComponent },
  { path: 'addReadingSheets', component: ReadingSheetAddComponent }
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutes {} 