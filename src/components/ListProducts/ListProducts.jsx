import React, { useState, useEffect } from "react";
import CardProducts from "../CardProducts/CardProducts";
import { Link } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const CardProduct = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductsData(docs);
      setIsLoading(false); // Agregamos esto para indicar que la carga ha finalizado
    };
    getProducts();
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <p>Cargando productos...</p>
        ) : (
          productsData.map((data) => (
            <Link key={data.id} to={`/Detail/${data.id}`}>
              <CardProducts productsData={data} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default CardProduct;