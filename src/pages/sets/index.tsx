import { getAllSets } from "@/service/pokemon.service";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { useEffect, useState } from "react";
import { BookComponent } from "@/components/BookComponent";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
} from "next";

//SSR = getServerSideProps
//SSG/ISR = getStaticProps + getStaticPaths
//getStaticPaths fallback = false | true | blocking

//CSR
// const BookSets = () => {
//   const [books, setBooks] = useState<Set[]>([]);

//   const setInit = async () => {
//     try {
//       const tempSets = await getAllSets();
//       setBooks(tempSets);
//     } catch (e) {
//       console.log("Error: ", e);
//     }
//   };
//   useEffect(() => {
//     setInit();
//   }, []);

//   return (
//     <div>
//       <h1 className="font-bold text-3xl pt-3 pb-10 text-center text-blue-800">
//         Available Books
//       </h1>
//       {/* {!books && <h1>Loading....</h1>} */}
//       <div className="w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-5">
//         {books.map((book, index) => (
//           <BookComponent key={index} book={book} />
//         ))}
//       </div>
//     </div>
//   );
// };

//SSR
// export const getServerSideProps: GetServerSideProps<{
//   serverSets: Set[];
// }> = async (context: GetServerSidePropsContext) => {
//   // console.log("I am from Server");
//   const tempSets = await getAllSets();
//   return { props: { serverSets: tempSets } };
// };

// const BookSets = (props: { serverSets: Set[] }) => {
//   const [books, setBooks] = useState<Set[]>(props.serverSets);

//   return (
//     <div>
//       <h1 className="font-bold text-3xl pt-3 pb-10 text-center text-blue-800">
//         Available Books
//       </h1>

//       {!books && "Loading....."}

//       <div className="w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-5">
//         {books.map((book, index) => (
//           <BookComponent key={index} book={book} />
//         ))}
//       </div>
//     </div>
//   );
// };

//SSG
export const getStaticProps: GetStaticProps<{ serverSets: Set[] }> = async (
  context
) => {
  console.log("I am from getStatic props Server");

  let returnVal = null as unknown as Set[];
  try {
    const tempSets = await getAllSets();
    //throw new Error("Custom Error");
    returnVal = tempSets;
  } catch (e) {
    console.log(e);
    return { notFound: true, revalidate: 1200 };
  }

  return { props: { serverSets: returnVal } };
};

const BookSets = (props: { serverSets: Set[] }) => {
  const [books, setBooks] = useState<Set[]>(props.serverSets);

  return (
    <div>
      <h1 className="font-bold text-3xl pt-3 pb-10 text-center text-blue-800">
        Available Books
      </h1>

      {!books && "Loading....."}

      <div className="w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-5">
        {books.map((book, index) => (
          <BookComponent key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

//ISR
// export const getStaticProps: GetStaticProps<{ serverSets: Set[] }> = async (
//   context
// ) => {
//   console.log("I am from getStatic props Server");
//   const tempSets = await getAllSets();
//   return { props: { serverSets: tempSets }, revalidate: 20 };
// };

// const BookSets = (props: { serverSets: Set[] }) => {
//   const [books, setBooks] = useState<Set[]>(props.serverSets);
//   const setInit = async () => {
//     try {
//       const tempSets = await getAllSets();
//       setBooks(tempSets);
//     } catch (e) {
//       console.log("Error: ", e);
//     }
//   };
//   useEffect(() => {
//     if (!books) {
//       setInit();
//     }
//   }, [books]);

//   return (
//     <div>
//       <h1 className="font-bold text-3xl pt-3 pb-10 text-center text-blue-800">
//         Available Books
//       </h1>
//       {!books && "Loading....."}
//       <div className="w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-5">
//         {books.map((book, index) => (
//           <BookComponent key={index} book={book} />
//         ))}
//       </div>
//     </div>
//   );
// };

export default BookSets;
