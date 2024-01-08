import React, { useEffect, useState} from "react"
import axios from "axios"


const ListProducts = () => {
 const [chars, setChars] = useState ([]);

 useEffect(() => {
    axios("https://fakestoreapi.com/products").than((res) => console.log(res.data)
    );
 }, []);
 
 
    return (
    <div>ListProducts</div>
  )
}


export default ListProducts ;