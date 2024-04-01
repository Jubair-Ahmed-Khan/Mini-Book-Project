
import React from 'react';
import { FC } from "react"
import { BookImageComponent } from './BookImageComponent';
import { BookInfoComponent } from './BookInfoComponent';

export const BookComponent : FC<BookComponentProps>= ({book})=>{
  return(
    <div className="rounded overflow-hidden border border-2 border-teal-300 mb-5 mr-3">
      <BookImageComponent imageUrl={book.imageUrl} />
      <BookInfoComponent info={book} />
    </div>
  );
}