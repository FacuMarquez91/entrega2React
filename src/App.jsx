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
          <Route path="/ManPage" element={<ManPage/>} />
          <Route path="/WomenPage" element={<WomenPage/>} />
          <Route path="/ContactPage" element={<ContactPage/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </div>
        </Router>


    );
  }


export default App;
