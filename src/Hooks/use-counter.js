import { useState,useEffect } from "react";
function useCounter(initialCounter){
    const [count,setCount]=useState(initialCounter);
    useEffect(()=>{
        console.log(count);
    },[count])
    
    const increament=()=>{
    setCount(count+1);
    }
    return {
        count,
        increament,
    }
}
export default useCounter;