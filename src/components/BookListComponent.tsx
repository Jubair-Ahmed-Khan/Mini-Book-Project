// import { BookComponent } from "./BookComponent"
import React from 'react';
import { FC } from "react"
import { BookComponent } from './BookComponent';

export const BookListComponent:FC<BookListProps> = ({books})=>{
  return(
    <div className="w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ml-5">
      {books.map((book, index) => (
        <BookComponent key={index} book={book} />
      ))}
    </div>
  );
}