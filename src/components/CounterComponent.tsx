import { useState } from "react";

export const CounterComponent = ()=>{

  let value:number = 0;
  const[stateVal,setStateVal]=useState<number>(0);

  function changeValue(){
    value = value + 1;
    setStateVal(stateVal + 1);
  }

  return(
    <div className="flex w-100 h-screen justify-center items-center bg-blue-200">
      <div className="flex flex-col w-48 h-48 bg-purple-300 p-5">
        <p>Nonsate value {value}</p>
        <p>Statevalue {stateVal}</p>
        <button className="text-center bg-grey-500 border bg-white mt-5 hover:bg-blue-300" 
                
                onClick={()=>changeValue()}
        >
            Increment
        </button>
      </div>
    </div>
  )
}