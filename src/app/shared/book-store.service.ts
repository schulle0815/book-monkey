import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, retry } from 'rxjs/operators';
import { Book } from './book/book';
import { BookRaw } from './book/book-raw';
import { BookFactory } from './book/book-factory';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  private api = 'https://api4.angular-buch.com';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<BookRaw[]>(`${this.api}/books`).pipe(
      retry(3),
      map((booksRaw) => booksRaw.map((b) => BookFactory.fromRaw(b))),
      catchError(this.errorHandler)
    );
  }

  getAllSearch(searchTerm: string): Observable<Book[]> {
    return this.http
      .get<BookRaw[]>(`${this.api}/books/search/${searchTerm}`)
      .pipe(
        retry(3),
        map((booksRaw) => booksRaw.map((b) => BookFactory.fromRaw(b))),
        catchError(this.errorHandler)
      );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<BookRaw>(`${this.api}/book/${isbn}`).pipe(
      retry(3),
      map((bookRaw) => BookFactory.fromRaw(bookRaw)),
      catchError(this.errorHandler)
    );
  }

  remove(isbn: string): Observable<any> {
    const requestUrl = `${this.api}/book/${isbn}`;
    return this.http.delete<any>(requestUrl, { responseType: undefined });
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error(`Error: ${error.message}`);
    return throwError(error);
  }
}
