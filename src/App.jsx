import { useEffect,useState } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration,getGenres } from "./store/homeSlice";

function App() {

  const dispatch = useDispatch()
  const {url} = useSelector((state)=>state.home);



  useEffect(()=>{
    apiTesting();
  },[])

  const apiTesting=()=>{
    fetchDataFromApi("/movie/popular")
    .then((response)=>{
      console.log(response);
      dispatch(getApiConfiguration(response))
    })
  }

  return (
    <>
      <div>
        {url?.total_pages}
      </div>
    </>
  )
}

export default App
