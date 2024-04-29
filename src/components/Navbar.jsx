import React from 'react'
import {useNavigate, useLocation} from "react-router-dom"
import Saved from './Saved'

const Navbar = ({setSearch}) => {

    const navigate = useNavigate()
    const location = useLocation()
  return (
    <>
   
     <div className="container my-5 " style={{width: "800px"}}>

<div className='d-flex align-items-center gap-2'><img className='mb-3' src='https://files.raycast.com/os3kblbx05vvlom14vp1exztiade' alt='' style={{height: "60px"}}/>
<div><h2 className='mt-2'>Pexels</h2></div>
</div> 

     
  
{location.pathname ==="/" && ( <div className="mb-3">

<input type="text"
placeholder="search for images..."
onChange={(e)=>setSearch(e.target.value)}

className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"

/>
<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>)}

</div>
      <div className="nav mt-3 mb-5">
    <div className="button btn btn-outline-warning mx-3 " onClick={()=>{setSearch("nature") 
    navigate("/")} }>nature</div>
    <div className="button btn btn-outline-primary mx-3 "onClick={()=>{setSearch("car")
     navigate("/")}}>car</div>
    <div className="button btn btn-outline-info mx-3 "onClick={()=>{setSearch("tokyo")
         navigate("/")
    }}>tokyo</div>
    <div className="button btn btn-outline-secondary mx-3 "onClick={()=>{setSearch("fashion")
 navigate("/")}}>fashion</div>
    <div className="button btn btn-outline-warning mx-3 "onClick={()=>{setSearch("city")
 navigate("/")}}>city</div>
    <div className="button btn btn-outline-primary mx-3 "onClick={()=>{setSearch("travel")
 navigate("/")}}>travel</div>
    <div className="button btn btn-outline-info mx-3 "onClick={()=>{setSearch("animals")
 navigate("/")}}>animals</div>
    <div className="button btn btn-outline-secondary mx-3 "onClick={()=>{setSearch("buisness")
 navigate("/")}}>buisness & finance</div>
    <div className="button btn btn-outline-primary mx-3 "onClick={()=>{setSearch("dubai")
 navigate("/")}}>dubai</div>
    <div className="button btn btn-outline-secondary mx-3 "onClick={()=>{setSearch("technology")
 navigate("/")}}>technology</div>

    {
        location.pathname === "/saved"?
        (<div className="button btn btn-warning mx-3 "onClick={()=> navigate("/")}
    
        >Home</div>):
        (<div className="button btn btn-warning mx-3 "onClick={()=> navigate("/saved")}
    
        >saved</div>)
    }

      </div>
     
    </>
  )
}

export default Navbar
