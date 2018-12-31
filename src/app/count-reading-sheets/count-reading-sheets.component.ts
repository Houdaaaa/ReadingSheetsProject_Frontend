import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-reading-sheets',
  templateUrl: './count-reading-sheets.component.html',
  styleUrls: ['./count-reading-sheets.component.css']
})
export class CountReadingSheetsComponent implements OnInit {
  @Input('readingSheetsNumber') readingSheetsNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
