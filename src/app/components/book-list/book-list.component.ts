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

  selectCurrent(book:Book) {
    this.bookService.setCurrentSelection(book);
    window.scrollTo(0,0);
  }

  sortByTitle() {
    this.allBooks.sort(function(a,b) {
      var textA = a.title.toLowerCase();
      var textB = b.title.toLowerCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
  }

  sortByAuthor() {
    this.allBooks.sort(function(a,b) {
      var textA = a.author.toLowerCase();
      var textB = b.author.toLowerCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
  }

  sortBySeries() {
    this.allBooks.sort(function(a,b) {
      var textA = a.series.toLowerCase();
      var textB = b.series.toLowerCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
  }

  sortByHaveRead() {
    this.allBooks.sort(function(a,b) {
      var textA = a.haveRead;
      var textB = b.haveRead;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
  }

  totalBooksRead(): void {
    this.allBooks.forEach(book => {
      if(book.haveRead){
        this.booksRead += 1;
      }
    })
  }

}
