import React, { useState } from "react";
import { FC } from "react";
import { BookImageComponent } from "./BookImageComponent";
import { BookInfoComponent } from "./BookInfoComponent";
import { BookComponentProps } from "@/models/bookComponent";

export const BookComponent: FC<BookComponentProps> = ({ book }) => {
  const [display, setDisplay] = useState<string>("visible");
  function setVisibility() {
    if (display === "visible") setDisplay("invisible");
    else setDisplay("visible");
  }

  return (
    <div className="flex flex-col justify-between rounded border border-xl shadow-inner border-black-700 mb-5 mr-3 hover:bg-blue-200">
      <BookImageComponent imageUrl={book.images.logo} />
      <div className="flex flex-col justify-between  h-full pb-5">
        <BookInfoComponent className={display} info={book} />
        <button
          onClick={() => setVisibility()}
          className="w-24 mx-auto mt-5 p-3 text-white bg-pink-400"
        >
          Toggle
        </button>
      </div>
    </div>
  );
};
