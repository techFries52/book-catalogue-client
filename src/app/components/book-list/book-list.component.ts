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

  ngOnInit(): void {
    this.bookService.getAllBooksFromServer();
  }

  ngDoCheck() {
    this.allBooks = this.bookService.getAllBooks();
  }

  onClick(book:Book) {
    this.bookService.setCurrentSelection(book);
  }

}
