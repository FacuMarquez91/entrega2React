import React from "react";
import "./App.css";

// React-Router-Dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./Pages/HomePage/HomePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Shop from "./Pages/Shop/Shop";
import DetailPage from "./Pages/DetailPage/DetailPage";
import { ProductsProvider } from "./components/itemListContainer/itemListContainer";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <ProductsProvider>
        <div className="App">
          <Header />
          <div className="content">
            <NavBar />
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/Detail/:id" element={<DetailPage />} />
          </Routes>
        </div>
      </ProductsProvider>
    </Router>
  );
};

export default App;