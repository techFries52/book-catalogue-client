import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  allBooks:any = [];
  currentSelection:Book = {
    bookId:0,
    title:"Select A Book",
    author:"book author",
    genres:[],
    haveRead:true,
    series:"book series",
    picUrl:""
  };


  getAllBooksFromServer(): void {
    this.http.get<any>("http://localhost:8080/book").subscribe(
      response => {
        this.allBooks = response;
      }
    )
  }

  getAllBooks(): Book[] {
    return this.allBooks;
  }

  getCurrentSelection(): Book {
    return this.currentSelection;
  }

  setCurrentSelection(book:Book): void {
    this.currentSelection = book;
  }

}
