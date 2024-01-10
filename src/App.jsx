import React from "react";
import "./App.css";


//React-Router-Dom
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// componentes  

//Pages
import HomePage from "./Pages/HomePage/HomePage"
import ManPage from "./Pages/ManPage/ManPage"
import WomenPage from "./Pages/WomenPage/WomenPage"
import ContactPage from "./Pages/ContactPage/ContactPage"
import ErrorPage from "./Pages/ErrorPage/ErrorPage"
import DetailPage from "./Pages/DetailPage/DetailPage"
import CategoryPage from "./Pages/CategoryPage/CategoryPage";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import CardProducts from "./components/CardProducts/CardProducts"

const App = () => {
    return (
        <Router>
      <div className="App">

        <Header />

        
        
        <div className="content">
          <NavBar />
          </div>
         
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/men's clothing" element={<ManPage/>} />
          <Route path="/women's clothing" element={<WomenPage/>} />
          <Route path="/ContactPage" element={<ContactPage/>} />
          <Route path="*" element={<ErrorPage/>} />
          <Route path="/Detail/:id" element={<DetailPage/>} />
          <Route path="/category/:categoryId" element={<CategoryPage/>} />
        </Routes>
      </div>
        </Router>


    );
  }


export default App;
