import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  @Input() book?: Book;
  @Output() showListEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  getRating(numberOfStars: number) {
    return new Array(numberOfStars);
  }

  showBookList() {
    this.showListEvent.emit();
  }
}
