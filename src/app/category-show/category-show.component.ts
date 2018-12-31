import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/category';
import {CategoriesService} from '../categories.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-show',
  templateUrl: './category-show.component.html',
  styleUrls: ['./category-show.component.css']
})

/**
*  The component displays one category and its specifications
*/
export class CategoryShowComponent implements OnInit {

  category: Category;

  constructor(private categoriesService: CategoriesService, private router: Router, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.getCategory();
  }

  /**
  * Gets the category to be displayed
  */
  getCategory(){
    const title = this.route.snapshot.paramMap.get('title');
    this.categoriesService.getCategoryService(title).subscribe(
      data => {
        this.category = data;
      },
      err => {
        console.log("Error occurred")
      }
    );
  }

  /**
  * Delete the category using a service
  */
  deleteCategory(){
    this.categoriesService.deleteCategoryService(this.category.id).subscribe(
      data => {
        this.router.navigate(['/categories']);
      }
    );
  }

}
