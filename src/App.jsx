import React from "react";
import "./App.scss";
import LoginPage from "./components/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>

    </>
  );
};

export default App;
