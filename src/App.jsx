import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import axios from "axios"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Saved from './components/Saved.jsx'

const App = () => {

  const API_KEY= "uYvvvaRTm7ELE98YqgbiGjXBaaXdpZXdnKsf1HFhepLBc1m4MlaJaaqd"

  const [images, setImages]=useState([])
  const [search, setSearch]=useState("nature")
  const [loader, setLoader]=useState(true)
  const [saved, setSaved]=useState([])

  useEffect(()=>{
     const fetchData= async()=>{
      const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`,
      {
        headers : {
          Authorization:API_KEY
        }
      })
      // console.log(res.data.photos)
      setImages(res.data.photos)
      setLoader(false)
   
      console.log(images)
     }

     const data= JSON.parse(localStorage.getItem("Images"))
     if(data){
      setSaved(data)
     }
    
     fetchData()



  }, [search])

  useEffect(()=>{
   if(saved.length != 0){
    const json = JSON.stringify(saved)
    localStorage.setItem("Images", json)
   }
  },[saved])

  console.log(saved)
  return (
    <>
      <Router>
      <Navbar setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home images={images} loader={loader} saved={saved} setSaved={setSaved}/>}/>
        <Route path='/saved' element={<Saved saved = {saved} loader={loader}/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
