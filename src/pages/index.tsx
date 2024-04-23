import { HeaderComponent } from "@/components/HeaderComponent";
import { BookListComponent } from "@/components/BookListComponent";

 const Home = ()=> {
  return (
    <>
      <header>
        <HeaderComponent></HeaderComponent>
      </header>
      <main className="p-10 h-screen">
        <BookListComponent >
          
        </BookListComponent>
      </main>
      <footer></footer>
    </>
  );
}

export default Home
