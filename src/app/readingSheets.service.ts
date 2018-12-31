import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput  } from 'rxjs';
import { ReadingSheet } from 'src/app/classes/readingSheet';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

/**
* This class specifies all services related to reading sheets  
*/
export class ReadingSheetsService {

  private url_api = "http://localhost:8000/api"

  constructor(private http: HttpClient) { 
  }

  /**
  * Gets all reading sheets availables using an API
  */
  getReadingSheetsService(): Observable<ReadingSheet[]> {
    const url = '/books';
    return this.http.get<ReadingSheet[]>(this.url_api + url);
  }

  /**
  * Gets a specific reading sheet using an API
  * 
  * @param {number} id - the id of the reading sheet desired 
  */
  getReadingSheetService(id: number): Observable<ReadingSheet> {
    const url = '/book/' + id;
    return this.http.get<ReadingSheet>(this.url_api + url);
  }

  /**
  * Edits a specific reading sheet using an API
  * 
  * @param {number} id - the id of the reading sheet to edit
  * @param {any} editedReadingSheet - the params of the edited reading sheet to send to the API
  */
  editReadingSheetService(id: number, editedReadingSheet: any): Observable<any> {
    const url = '/' + id + '/editBook';
    return this.http.put(this.url_api + url, editedReadingSheet, httpOptions);
  }

  /**
  * Adds a new reading sheet using an API
  * 
  * @param {any} newReadingSheet - the params of the new reading sheet to send to the API
  */
  addReadingSheetService(newReadingSheet: any): Observable<ReadingSheet> {
    const url = '/addBook';
    return this.http.post<ReadingSheet>(this.url_api + url, newReadingSheet, httpOptions);
  }

  /**
  * Deletes a specific reading sheet using an API
  * 
  * @param {number} id - the id of the reading sheet to delete
  */
  deletereadingSheetService(id: number): Observable<ReadingSheet> {
    const url = '/book/' + id + '/remove';
    return this.http.delete<ReadingSheet>(this.url_api + url );
  }

  /**
  * Gets all reading sheets that correspond to a specific category using an API
  * 
  * @param {string} categoryTitle - the title of the category desired
  */
  searchReadingSheetService(categoryTitle: string): Observable<ReadingSheet[]> {
    const url = '/book/search/' + categoryTitle ;
    return this.http.get<ReadingSheet[]>(this.url_api + url);
  }

}