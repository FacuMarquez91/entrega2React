import React, { useState, createContext} from "react";

 export const ItemListContainer = createContext();

const initialState = () => [
  {

  }
]

export const ProductsProvider = ({children}) =>{
  const [items] = useState (initialState);


  return(
    <ItemListContainer.Provider value={[items]}>
      {children}
    </ItemListContainer.Provider>
  )
};

export default ProductsProvider;