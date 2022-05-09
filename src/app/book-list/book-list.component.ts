import { Component, OnInit, Output } from '@angular/core';
import { Book, BookStoreService } from '../shared';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookStore: BookStoreService) {}

  ngOnInit(): void {
    this.books = this.bookStore.getAll();
  }
}
