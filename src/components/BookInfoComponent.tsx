// components/BookInfo.tsx
import React from 'react';
import {FC} from 'react';


export const BookInfoComponent:FC<BookInfoComponentProps> = ({info}) => {
  const { title, author, genre, price } = info;
  return (
    <div className="px-6 py-4 h-full hover:bg-blue-200">
      <div className="font-bold text-xl hover:text-2xl mb-2">
        {title}
      </div>
      <div className="text-base">
        <p className="text-gray-700 mb-2">
          <span className='font-bold text-blue-500'>Author: </span>
          {author}
        </p>
        <p className="text-gray-700 mb-2">
          <span className='font-bold text-blue-500'>Genre: </span>
          {genre}
        </p>
        <p className="text-gray-700 mb-2">
          <span className='font-bold text-blue-500'>Price: </span>
          ${price}
        </p>
      </div>
      
    </div>
  );
};

