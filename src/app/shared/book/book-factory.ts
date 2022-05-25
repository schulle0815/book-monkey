/*
  @copyright 2022, Balluff GmbH, all rights reserved
  @description
  @authors See AUTHORS file.
  @since 2022-05-25
*/

import { Book } from './book';
import { BookRaw } from './book-raw';

export class BookFactory {
  static fromRaw(book: BookRaw): Book {
    return { ...book, published: new Date(book.published) };
  }
}
