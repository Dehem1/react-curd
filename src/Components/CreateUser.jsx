import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateUser(){
 const[name,setName]=useState("");   
 const[email,setEmail]=useState("");   
 const[mobNo,setMobNo]=useState("");   
 const[address,setAddress]=useState("");   
 const[password,setPassword]=useState("");   
function reg(){
    let m={name,email,mobNo,address,password}
    fetch('http://localhost:5000/users',{
          'method':'POST',
          'headers':{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(m)    
}).then((result)=>{
    result.json().then((resp)=>{
        console.log(resp)
    })
})
}
function upd(){
    let n=JSON.parse(window.localStorage.getItem("manish"))
let data={name,email,mobNo,address,password}
fetch(`http://localhost:5000/users/${n}`,{
    'method':'PUT',
    'headers':{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)    
}).then((result)=>{
result.json().then((resp)=>{
  console.log(resp)
})
})
}
    return(
        <>
        <h1>CreteUser</h1>
        Name:
        <input type="text" value={name} onChange={e=>{setName(e.target.value)}}/><br/><br/>
        Email:
        <input type="email"  value={email} onChange={e=>{setEmail(e.target.value)}}/><br/><br/>
        Mobile:
        <input type="number"  value={mobNo} onChange={e=>{setMobNo(e.target.value)}}/><br/><br/>
        Address:
        <input type="text" value={address} onChange={e=>{setAddress(e.target.value)}}/><br/><br/>
        Password
        <input type="password" value={password} onChange={e=>{setPassword(e.target.value)}}/><br/><br/>
        <Link to="/showuser"><input type="button" value="Register" onClick={reg}/></Link>
        <Link to="/showuser"><input type="button" value="Update" onClick={upd}/></Link>
       
        
        </>
    )
    
}