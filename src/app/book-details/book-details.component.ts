import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, BookStoreService } from '../shared';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  book?: Book;

  constructor(
    private route: ActivatedRoute,
    private bookStoreService: BookStoreService
  ) {}

  ngOnInit(): void {
    const isbn = this.route.snapshot.paramMap.get('isbn');
    this.book = this.bookStoreService.getSingle(isbn || '');
  }

  getRating(numberOfStars: number) {
    return new Array(numberOfStars);
  }
}
