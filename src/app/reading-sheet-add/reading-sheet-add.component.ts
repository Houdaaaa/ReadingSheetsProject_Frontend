import { Component, OnInit } from '@angular/core';
import {ReadingSheetsService} from '../readingSheets.service';
import { ReadingSheet } from '../classes/readingSheet';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../classes/category';
import {CategoriesService} from '../categories.service'

@Component({
  selector: 'app-reading-sheet-add',
  templateUrl: './reading-sheet-add.component.html',
  styleUrls: ['./reading-sheet-add.component.css']
})

/**
* The component add a new reading sheet
*/
export class ReadingSheetAddComponent implements OnInit {
  
  category = new Category(0,"","");
  newReadingSheet = new ReadingSheet(0,"","",0,"","","","","","","","",this.category);   //the backend is responsible for assigning the real id

  categories: Category[];

  constructor(private readingSheetsService: ReadingSheetsService, private categoriesService:CategoriesService, private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.getCategories();
  }

  /**
  * Gets all categories
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
  *  Creates the new reading sheet using a service
  */
  validation(){

    const readingSheet = {
      'Title' : this.newReadingSheet.Title,
      'Author' : this.newReadingSheet.Author,
      'PagesNumber': this.newReadingSheet.PagesNumber,
      'Editor': this.newReadingSheet.Editor,
      'EditionDate': this.newReadingSheet.EditionDate,
      'Collection': this.newReadingSheet.Collection,
      'OriginalLanguage': this.newReadingSheet.OriginalLanguage,
      'MainCharacters': this.newReadingSheet.MainCharacters,
      'Summary': this.newReadingSheet.Summary,
      'EnjoyedExtract': this.newReadingSheet.EnjoyedExtract,
      'CriticalAnalysis': this.newReadingSheet.CriticalAnalysis,
      'category': this.newReadingSheet.category.title
    };
 
    this.readingSheetsService.addReadingSheetService(readingSheet).subscribe(
      data => {
        this.router.navigate(['/readingSheets']);
      }
    );
  }

}
