import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { Book, BookStoreService } from '../shared';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  keyUp$ = new Subject<string>();
  foundBooks: Book[] = [];
  isLoading = false;

  constructor(private bs: BookStoreService) {}

  ngOnInit(): void {
    this.keyUp$
      .pipe(
        filter((c) => c.length >= 3),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => (this.isLoading = true)),
        switchMap((searchTerm) => this.bs.getAllSearch(searchTerm)),
        tap(() => (this.isLoading = false))
      )
      .subscribe((books) => (this.foundBooks = books));
  }
}
