/*
  @copyright 2022, Balluff GmbH, all rights reserved
  @description description
  @authors See AUTHORS file.
  @since 2022-05-25
*/

import { Thumbnail } from './thumbnail';

export interface BookRaw {
  isbn: string;
  title: string;
  authors: string[];
  published: string;
  subtitle?: string;
  rating?: number;
  thumbnails?: Thumbnail[];
  description: string;
}

export interface ThumbnailRaw {
  url: string;
  title?: string;
}
