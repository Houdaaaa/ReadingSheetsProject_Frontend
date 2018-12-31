import { Component, OnInit } from '@angular/core';
import {ReadingSheetsService} from '../readingSheets.service';
import { ReadingSheet } from '../classes/readingSheet';
import { Category } from '../classes/category';
import {CategoriesService} from '../categories.service'

@Component({
  selector: 'app-reading-sheets-show',
  templateUrl: './reading-sheets-show.component.html',
  styleUrls: ['./reading-sheets-show.component.css']
})

/**
* The component displays all reading sheets
*/
export class ReadingSheetsShowComponent implements OnInit {

  readingSheets: ReadingSheet[];
  categories: Category[];


  constructor(private readingSheetsService: ReadingSheetsService, private categoriesService:CategoriesService) { }

  ngOnInit() {
    this.getReadingSheets();
    this.getCategories();
  }

  /**
  * Gets all reading sheets to display 
  */
  getReadingSheets(): void {
    this.readingSheetsService.getReadingSheetsService().subscribe(
      data => {
        this.readingSheets = data; 
      },
      err => {
        console.log("Error occurred")
      }
    );
  }

  /**
  * Gets all categories to display 
  */
  getCategories(){
    this.categoriesService.getCategoriesService().subscribe(
      data => {
        this.categories = data;
      },
      err => {
        console.log("Error occurred")
      }
    );
  }

  /**
   * Searches for all reading sheets that correspond to a specified category 
   * 
   * @param {string} categoryTitle - the title of the category desired
   */
  search(categoryTitle: string){
    this.readingSheetsService.searchReadingSheetService(categoryTitle).subscribe(
      data => {
        this.readingSheets = data;
      },
      err => {
        console.log("Error occurred")
      }
    );
  }
}