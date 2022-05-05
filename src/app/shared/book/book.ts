/*
  @copyright 2022, Balluff GmbH, all rights reserved
  @description description
  @authors See AUTHORS file.
  @since 2022-04-05
*/

import { Thumbnail } from './thumbnail';

export interface Book {
  isbn: string;
  title: string;
  authors: string[];
  published: Date;
  subtitle?: string;
  rating?: number;
  thumbnails?: Thumbnail[];
  description: string;
}
