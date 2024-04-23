import React, { useEffect, useState } from "react";
import { BookComponent } from "./BookComponent";
import { getAllSets } from "@/service/pokemon.service";
import { PokemonTCG } from "@/interfaces/PokemonTCG";
// import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

export const BookListComponent = () => {
  const [books, setBooks] = useState<PokemonTCG[]>([]);
  useEffect(() => {
    getAllSets().then((x) => setBooks(x));
  }, []);

  return (
    <div>
      <h1 className="font-bold text-3xl pt-3 pb-10 text-center text-blue-800">
        Available Books
      </h1>
      <div className="w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-5">
        {books.map((book, index) => (
          <BookComponent key={index} book={book} />
        ))}
      </div>
    </div>
  );
};
