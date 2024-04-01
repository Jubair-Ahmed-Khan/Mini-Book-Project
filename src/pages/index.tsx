import { HeaderComponent } from "@/components/HeaderComponent";
import { BookListComponent } from "@/components/BookListComponent";
import books from '../data/bookData.json';

export default function Home() {
  const bookList:Book[] = books;
  return (
    <>
      <header>
        <HeaderComponent></HeaderComponent>
      </header>
      <main className="p-10">
        <BookListComponent books={bookList} >
          
        </BookListComponent>
      </main>
      <footer></footer>
    </>
  );
}
