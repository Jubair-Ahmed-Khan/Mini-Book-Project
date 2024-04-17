import { getAllSets } from "pokemon-tcg-sdk-typescript/dist/sdk"
import { useEffect, useState } from "react"

const BookList = ()=>{
  const [books,setBooks] = useState<Array<{}>>([]);
  useEffect(()=>{
    getAllSets().then((allSets)=>{
       console.log(allSets);
      setBooks(allSets);
    })
  })
  //return books;
}

export default BookList;