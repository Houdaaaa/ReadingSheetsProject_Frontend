import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category'; // classe category
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CategoriesService} from '../categories.service'

@Component({
  selector: 'app-categories_show',
  templateUrl: './categories_show.component.html',
  styleUrls: ['./categories_show.component.css']
})

/**
* The component displays all categories
*/
export class Categories_showComponent implements OnInit {

  categories: Category[];
  
  constructor(private categoriesService: CategoriesService) { 

  }

  ngOnInit() {
    this.getCategories();
  }

  /**
  * Fills in the list "categories" by all of categories availables
  */
  getCategories(){
    this.categoriesService.getCategoriesService().subscribe(
      data => {
        this.categories = data; //On remplie la liste Category[] par tout ce qui est renvoyé par le json
                                 
      },
      err => {
        console.log("Error occurred ")
      }
    );
  }
}
