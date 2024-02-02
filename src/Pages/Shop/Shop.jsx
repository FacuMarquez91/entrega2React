import "./shop.css"
import React, {useState} from "react"
import { TextField, dialogClasses } from "@mui/material";

const styles = { 
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};



const initialState = {
  name: "",
  lastname: "",
  email: "",
};

const Shop = () => {
const [values, setValues] = useState(initialState);

const onChange = (e) => {
  const {value, name} = e.target;
  setValues ({ ...values, [name]: value});
}

  return(
    <div style={styles.containerShop}>
      <h1 style={{color: "white"}}>Shop </h1>
      <form >
        <TextField
        placeholder="name"
        style={{margin: 10, width: 400}}
        name="name"
        value={values.name}
        onChange={onChange}
        />
        <TextField
        placeholder="Last Name"
        style={{margin: 10, width: 400}}
        name= "lastName"
        value={values.lastname}
        onChange={onChange}
        />
        <TextField
        placeholder="e-mail"
        style={{margin:10, width: 400}}
        name="email"
        value={values.email}
        onChange={onChange}
        />

        <button> Send</button>
      </form>
    </div>
  );
};


export default Shop;