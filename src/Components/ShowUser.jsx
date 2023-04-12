import React, { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
export default function ShowUser(){


    const[data,setData]=useState([]);
    function demo1(){
        fetch(' http://localhost:5000/users').then((result)=>{
        result.json().then((resp)=>{
         //console.log(resp)
         setData(resp)
        })
         })
    }
   useEffect(()=>{
    demo1()
   },[])
  function del(id){
    //alert(id)
    fetch(`http://localhost:5000/users/${id}`,{
     'method':'DELETE',
     'headers':{
        'Content-Type':'application/json'
     },
     //body:JSON.stringify(data)
    }).then((result)=>{
    result.json().then((resp)=>{
        console.log(resp)
    })
    })
    demo1()
  }
  function edit(id){
  window.localStorage.setItem('manish',JSON.stringify(id))
  }
    return(
        <>
        <h1 style={{color:'red'}}>ShowUser</h1>
        <table border="rules all">
            <tr >
            <th >id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Password</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            {
                data.map((item,index)=>
                <tr>
                <th>{index}</th>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.mobNo}</th>
                <th>{item.address}</th>
                <th>{item.password}</th>
                <Link to="/"><td><button onClick={()=>edit(item.id)}>Edit</button></td></Link>
                <td><button onClick={()=>del(item.id)}>Delete</button></td>
                </tr>
                )
            }
        </table><br/><br/>
      
        </>
    )
}