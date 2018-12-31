import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ReadingSheetsService} from '../readingSheets.service';
import { ReadingSheet } from '../classes/readingSheet';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../classes/category';
import {CategoriesService} from '../categories.service'

@Component({
  selector: 'app-reading-sheet-edit',
  templateUrl: './reading-sheet-edit.component.html',
  styleUrls: ['./reading-sheet-edit.component.css']
})

/**
* The component edit a reading sheet 
*/
export class ReadingSheetEditComponent implements OnInit {

  readingSheetToEdit: ReadingSheet;
  categories: Category[];


  constructor(private readingSheetsService: ReadingSheetsService, private categoriesService:CategoriesService, private router: Router, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.getReadingSheetToEdit();
    this.getCategories();
  }

  /**
  * Gets the reading sheet object to edit 
  */
  getReadingSheetToEdit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.readingSheetsService.getReadingSheetService(Number(id)).subscribe(
      data => {
        this.readingSheetToEdit = data;
      },
      err => {
        console.log("Error occurred");
      }
    );
  }

  /**
  * Gets all categories availables 
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
  * Updates the reading sheet using a service
  */
  validation(){

    const readingSheetEdited = {
      'Title' : this.readingSheetToEdit.Title,
      'Author' : this.readingSheetToEdit.Author,
      'PagesNumber': this.readingSheetToEdit.PagesNumber,
      'Editor': this.readingSheetToEdit.Editor,
      'EditionDate': this.readingSheetToEdit.EditionDate,
      'Collection': this.readingSheetToEdit.Collection,
      'OriginalLanguage': this.readingSheetToEdit.OriginalLanguage,
      'MainCharacters': this.readingSheetToEdit.MainCharacters,
      'Summary': this.readingSheetToEdit.Summary,
      'EnjoyedExtract': this.readingSheetToEdit.EnjoyedExtract,
      'CriticalAnalysis': this.readingSheetToEdit.CriticalAnalysis,
      'category': this.readingSheetToEdit.category.title
    };
 
    this.readingSheetsService.editReadingSheetService(this.readingSheetToEdit.id, readingSheetEdited).subscribe(
      data => {
        this.router.navigate(['readingSheet/'+ String(this.readingSheetToEdit.id)]);
      }
    );
  }

}
