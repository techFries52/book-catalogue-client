import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService:BookService) { }

  allBooks:Book[] = [];
  booksRead:number = 0;

  ngOnInit(): void {
    this.bookService.getAllBooksFromServer();
  }

  ngDoCheck() {
    this.allBooks = this.bookService.getAllBooks();
    this.booksRead = 0;
    this.totalBooksRead();    
  }

  onClick(book:Book) {
    this.bookService.setCurrentSelection(book);
  }

  totalBooksRead(): void {
    this.allBooks.forEach(book => {
      if(book.haveRead){
        this.booksRead += 1;
      }
    })
  }

}
