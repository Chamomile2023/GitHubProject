import React from "react";
import "./App.scss";
import LoginPage from "./components/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
