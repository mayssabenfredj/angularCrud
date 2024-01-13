import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private books=[
    new Book(1,"title 1" , "author 1", 30),
    new Book(2,"title 2" , "author 2", 60)

  ]
  constructor() { }

  getBooks(){
    return this.books;
  }
}
