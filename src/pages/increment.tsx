// import { CounterComponent } from "@/components/CounterComponent";
import { useEffect, useState } from "react";

export default function Increment(){
  const [stateVal,setStateVal]=useState<number>(0);
  const [width,setWidth]=useState<number>(0);
  

  // console.log(stateVal)
  useEffect(()=>{

    console.log("Window innerWidth",width);

    setWidth(window.innerWidth+stateVal);

    let resizer = ()=>{
      setWidth(window.innerWidth+stateVal);
    }
    
    window.addEventListener('resize',resizer);

    return ()=>{
      window.removeEventListener("resize",resizer);
    }

  },[stateVal])
  //return <CounterComponent></CounterComponent>
  return(
    <div onClick={()=>setStateVal(stateVal=>stateVal+1)}>
      {width}
      Increment
    </div>
  )
}
