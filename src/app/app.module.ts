import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentBookComponent } from './components/current-book/current-book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookService } from './services/book.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentBookComponent,
    BookListComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
