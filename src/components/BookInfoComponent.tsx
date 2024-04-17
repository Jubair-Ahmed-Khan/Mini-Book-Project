// components/BookInfo.tsx
import React from "react";
import {FC} from "react";

export const BookInfoComponent:FC<BookInfoComponentProps> = ({info,className}) => {
  const { name, id, series, total } = info;
  // console.log("Book info ==== ",info)
  return (
    <div className={className}>
        <div className="px-6 py-4">
            <div className="font-bold text-xl hover:text-2xl mb-2">
                {name}
            </div>
            <div className="text-base">
                <p className="text-gray-700 mb-2">
                  <span className='font-bold text-blue-500'>Author: </span>
                  {id}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className='font-bold text-blue-500'>Genre: </span>
                  {series}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className='font-bold text-blue-500'>Total Count: </span>
                  {total}
                </p>
        </div>
      </div>
    </div>
  );
};

