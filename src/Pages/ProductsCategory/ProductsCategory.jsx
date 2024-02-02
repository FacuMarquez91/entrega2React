
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CardProducts from "../../components/CardProducts/CardProducts";

import { Link } from "react-router-dom";

import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ProductsCategory = () => {
    const [productsData, setProductsData] = useState([]);


    const { category } = useParams();




    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, "products"), where("category", "==", category) );
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProductsData(docs);
        };
        getProducts();


    }, [category]);

    return (
        <>
            <div>
                {productsData.map((data) => (
                    <Link to={`/Detail/${data.id}`} key={data.id}>
                        <CardProducts player={data} />
                    </Link>
                ))}
            </div>
        </>
    )
};

export default ProductsCategory;