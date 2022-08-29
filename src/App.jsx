import React from "react";
import "./App.scss";
import LoginPage from "./components/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Project from "./components/Project/Project";
import RightSide from "./components/RightSide/RightSIde";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const request = await fetch(
      "https://api.github.com/users/Chamomile2023/repos"
    );
    const response = await request.json();
    setData(response);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header data={data} />
      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<Main data={data} />} />
          <Route path="/right" element={<RightSide />} />
          <Route path="/right/project" element={<Project />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
