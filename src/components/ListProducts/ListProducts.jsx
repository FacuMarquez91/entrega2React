import React, { useEffect, useState} from "react"
import axios from "axios"
import "./ListProducts.css"
import CardProducts from "../CardProducts/CardProducts";
import {Link} from "react-router-dom"


const ListProducts = () => {
 const [chars, setChars] = useState ([]);

 useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) => setChars(res.data)
    );
 }, []);
 
 
   return (
    <div className="CardProducts">
      {chars.map((char) =>{
         return(
            <div style={{margin: 10}} key={char.id}>
               <Link to={`/Detail/${char.id}`} style={{textDecoration: "none"}}>
               <CardProducts char={char}/>
               </Link>
            </div>
            
         );
      })}
   </div>
   );
};


export default ListProducts ;