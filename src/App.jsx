import React from "react";
import "./App.scss";
import LoginPage from "./components/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Project from "./components/Project/Project";
import RightSide from "./components/RightSide/RightSIde";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main/Project" element={<Project />} />
          <Route path="/right" element={<RightSide />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
