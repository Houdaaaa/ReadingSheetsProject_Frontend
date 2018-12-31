import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category'; // classe category
import {CategoriesService} from '../categories.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})

/**
* The component add a new category of reading Sheet
*/
export class CategoryAddComponent implements OnInit {

  newCategory = new Category(0,"","");      //the backend is responsible for assigning the real id

  constructor(private categoriesService: CategoriesService, private router: Router, private route: ActivatedRoute) { 
  }

  ngOnInit() {
  }

  /**
  * Creates the new category using a service
  */
  validation(){
    this.categoriesService.addCategoryService(this.newCategory).subscribe(
      data => {
        this.router.navigate(['category/'+ this.newCategory.title]);
      }
    );
  }

}
