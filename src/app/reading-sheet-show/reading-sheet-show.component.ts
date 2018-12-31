import { Component, OnInit } from '@angular/core';
import {ReadingSheetsService} from '../readingSheets.service';
import { ReadingSheet } from '../classes/readingSheet';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-reading-sheet-show',
  templateUrl: './reading-sheet-show.component.html',
  styleUrls: ['./reading-sheet-show.component.css']
})

/**
*  The component displays one reading sheet
*/
export class ReadingSheetShowComponent implements OnInit {

  readingSheet: ReadingSheet;

  constructor(private readingSheetsService: ReadingSheetsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getReadingSheet();
  }

  /**
  * Gets the reading sheet object to display 
  */
  getReadingSheet(){
    const id = this.route.snapshot.paramMap.get('id');
    this.readingSheetsService.getReadingSheetService(Number(id)).subscribe(
      data => {
        this.readingSheet = data;
      },
      err => {
        console.log("Error occurred")
      }
    );
  }

  /**
  * Delete the reading sheet using a service
  */
  deleteReadingSheet(){
    this.readingSheetsService.deletereadingSheetService(this.readingSheet.id).subscribe(
      data => {
        this.router.navigate(['/readingSheets']);
      }
    );
  }

}
