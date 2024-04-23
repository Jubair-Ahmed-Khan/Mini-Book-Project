import Image from "next/image";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { getSetsById } from "@/service/pokemon.service";

//SSR - getSer
const setPage = () =>{
  const router = useRouter();
  // console.log("I am in set page");
  const [set,setSet] = useState<Set>();

  console.log("router == ",router);
  useEffect(()=>{
    let setId = router.query.setid as string;
    // console.log("setId === ",setId);
      //console.log("router query == ",setId);
      if(setId){
        getSetsById(setId).
        then(x=>{
          setSet(x);
        })
        .catch(x=>{
        })
      }
  },[router.query?.setid]);

  return(
      <div className="flex h-full">
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="relative h-[100px]">
            <Image src={set?.images.logo||""} width={100} height={100} alt="demo"></Image>
            <div className="">
             {set?.name || "Loading..."}
            </div>
          </div>
        </div>
      </div>
    
  )

  
}
export default setPage;