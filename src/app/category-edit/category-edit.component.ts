import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category'; // classe category
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CategoriesService} from '../categories.service'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})

/**
* The component edit an existing category
*/
export class CategoryEditComponent implements OnInit {

  categoryToEdit: Category
  title: string 

  constructor(private categoriesService: CategoriesService, private router: Router, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.getCategoryToEdit();
  }

  /**
  * Gets the category to edit in the object "categoryToEdit"
  */
  getCategoryToEdit(){
    const title = this.route.snapshot.paramMap.get('title');
    this.categoriesService.getCategoryService(title).subscribe(
      data => {
        this.categoryToEdit = data;
      },
      err => {
        console.log("Error occurred")
      }
    );
  }

  /**
  * Update the category using a service
  */
  validation(){
    this.categoriesService.editCategoryService(this.categoryToEdit.id,this.categoryToEdit).subscribe(
      data => {
        this.router.navigate(['category/'+ this.categoryToEdit.title]);
      }
    );
  }

}
