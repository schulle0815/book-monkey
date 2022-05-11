import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private bookStoreService: BookStoreService
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.bookStoreService
      .getSingle(params.get('isbn') || '')
      .subscribe((book) => (this.book = book));
  }

  getRating(numberOfStars: number) {
    return new Array(numberOfStars);
  }

  removeBook() {
    if (window.confirm('Buch wirklich löschen?')) {
      this.bookStoreService
        .remove(this.book!.isbn)
        .subscribe((res) =>
          this.router.navigate(['../'], { relativeTo: this.route })
        );
    }
  }
}
