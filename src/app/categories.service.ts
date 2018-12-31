import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput  } from 'rxjs';
import { Category } from 'src/app/classes/category';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

/**
* This class specifies all services related to categories 
*/
export class CategoriesService {
  private url_api = "http://localhost:8000/api"

  constructor(private http: HttpClient) { 
  }

  /**
  * Gets all categories availables using an API
  */
  getCategoriesService(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url_api + '/book/category/config');
  }

  /**
  * Gets a specific category using an API
  * 
  * @param {string} title - the title of the category desired
  */
  getCategoryService(title: string): Observable<Category> {
    return this.http.get<Category>(this.url_api + '/book/category/config/' + title);
  }

  /**
  * Edits a specific category using an API
  * 
  * @param {number} id - the id of the category to edit
  * @param {Category} editedCategory - the category object edited
  */
  editCategoryService(id: number, editedCategory: Category): Observable<any> {

    return this.http.put(this.url_api + '/book/category/' + id + '/editCategory', editedCategory, httpOptions);
  }

  /**
  * Adds a new category using an API
  * 
  * @param {Category} newCategory - the new category to add
  */
  addCategoryService(newCategory: Category): Observable<Category> {

    return this.http.post<Category>(this.url_api + '/book/category/addCategory', newCategory, httpOptions);
  }

  /**
  * Deletes a specific category using an API
  * 
  * @param {number} id - the id of the category to delete
  */
  deleteCategoryService(id: number): Observable<Category> {
    return this.http.delete<Category>(this.url_api + '/book/category/' + id + '/removeCategory' );
  }

}
