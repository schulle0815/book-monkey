import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from './book/book';

@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  private api = 'https://api4.angular-buch.com';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<any>(`${this.api}/books`);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<any>(`${this.api}/book/${isbn}`);
  }

  remove(isbn: string): Observable<any> {
    const requestUrl = `${this.api}/book/${isbn}`;
    return this.http.delete<any>(requestUrl, { responseType: undefined });
  }
}
