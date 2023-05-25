import { useEffect,useState } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration,getGenres } from "./store/homeSlice";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import PageNotFound from './pages/404/PageNotFound';
import Details from './pages/details/Details';
import Explore from './pages/explore/Explore';
import SearchResult from './pages/searchResult/SearchResult'

function App() {

  const dispatch = useDispatch()
  const {url} = useSelector((state)=>state.home);



  useEffect(()=>{
    fetchApiConfig();
  },[])

  const fetchApiConfig=()=>{
    fetchDataFromApi("/configuration")
    .then((response)=>{
      const url={
        backdrop:response.images.secure_base_url + "original",
        poster:response.images.secure_base_url + "original",
        profile:response.images.secure_base_url + "original",

      }
      console.log(response);
      dispatch(getApiConfiguration(url))
    })
  }

  return (
    <div className="flex flex-col bg-[#23272F]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:mediaType/:id" element={<Details/>}/>
          <Route path="/search/:query" element={<SearchResult/>}/>
          <Route path="/explore/:mediaType" element={<Explore/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
