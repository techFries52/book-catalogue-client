import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-current-book',
  templateUrl: './current-book.component.html',
  styleUrls: ['./current-book.component.css']
})
export class CurrentBookComponent implements OnInit {

  constructor( private bookService:BookService) { }

  current:Book = {
    bookId:0,
    title:"placeholder",
    author:"placeholder",
    genres:[],
    haveRead:true,
    series:"placeholder",
    picUrl: "",
    description:""
  };

  ngOnInit(): void {
    this.current = this.bookService.getCurrentSelection();
  }

  ngDoCheck() {
    this.current = this.bookService.getCurrentSelection();
  }

}
