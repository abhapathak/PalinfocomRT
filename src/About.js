import react from "react"
import { useState } from "react";
import { Navigate } from "react-router-dom";
function About(){
    const [data,setData]=useState('react')
    let a=8;
    let b=9;
    function getData(){
        console.log("clicked",a+b)
        alert("clicked")
    }
function goto(){
     <Navigate to="/"></Navigate>
}
    return(
<div>
    <div className="container">
        <p>{`hello javascript${a+b}`}</p>
        <button onClick={()=>getData()}> Click me{data}</button>
    <div style={{width:"100%"}}><img src="images/meeting1.jpg" style={{width:"100%"} }/></div>
    </div>
    <button onClick={()=>goto()}> Goto</button>
</div>

    );
}

export default About;