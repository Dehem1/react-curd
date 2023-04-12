import React from "react";
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <>
        <Link to="/" >CreateUser || </Link>
        <Link to="/showuser" >ShowUser</Link>
        
        </>
    )
}