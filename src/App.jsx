import { useEffect,useState } from "react";
import { fetchDataFromApi } from "./utils/api";

function App() {

  useEffect(()=>{
    apiTesting();
  },[])

  const apiTesting=()=>{
    fetchDataFromApi("/movie/popular")
    .then((response)=>{
      console.log(response);
    })
  }

  return (
    <>
      <div>
        APP
      </div>
    </>
  )
}

export default App
