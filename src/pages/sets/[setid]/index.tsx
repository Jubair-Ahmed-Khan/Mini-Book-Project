import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { getAllSets, getSetsById } from "@/service/pokemon.service";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async (context) => {
  let allSets = await getAllSets();
  let listOfSetIdObjects = allSets.map((x) => {
    return { params: { setId: x.id } };
  });

  return { paths: listOfSetIdObjects.splice(0, 10), fallback: true };
};

export const getStaticProps: GetStaticProps<{
  serverSet: Set;
}> = async (context) => {
  console.log("I am from getStatic props Server");

  let returnVal = null as unknown as Set;
  try {
    const tempSets = await getSetsById(context.params?.setid as string);
    //throw new Error("Custom Error");
    returnVal = tempSets;
  } catch (e) {
    console.log(e);
    return { notFound: true, revalidate: 1200 };
  }

  return { props: { serverSet: returnVal } };
};
const setPage: FC<{ serverSet: Set }> = ({ serverSet }) => {
  const router = useRouter();
  // console.log("I am in set page");
  const [set, setSet] = useState<Set>(serverSet);

  //console.log("router == ", router);
  useEffect(() => {
    let setId = router?.query.setid as string;
    console.log("****");
    //console.log("setId === ",setId);
    //console.log("router query == ",setId);
    //
    if (serverSet) {
      setSet(serverSet);
    }
  }, [serverSet]);

  return (
    <div className="flex h-screen">
      {router.isFallback ? (
        <>Fallback Loading</>
      ) : (
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="relative h-[100px]">
            <Image
              src={set?.images.logo || ""}
              width={100}
              height={100}
              alt="demo"
            ></Image>
            <div className="">{set?.name || "Loading..."}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default setPage;
