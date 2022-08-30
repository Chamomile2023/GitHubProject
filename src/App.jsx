import React from "react";
import "./App.scss";
import LoginPage from "./components/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Project from "./components/Project/Project";
import RightSide from "./components/RightSide/RightSIde";
import Repository from "./components/Repository/Repository";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(6);
  //Login
  const [auth, setAuth] = useState(false);

  const { pathname } = useLocation();

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

  const firstIndex = currentPage * totalPage;
  const lastIndex = firstIndex - totalPage;
  const dataSlice = data.slice(lastIndex, firstIndex);
  function paginationPage(num) {
    setCurrentPage(num);
  }

  const user = {
    username: "Login123",
    password: "123456",
  };
  let navigate = useNavigate();

  const useAuth = (params) => {
    if (
      user.username === params.username && user.password === params.password ? navigate("/") : navigate("/login")) {
      setAuth(true);
    } else {
      setAuth(false)
    }
  };

  return (
    <>
      {pathname === "/login" ? "" : <Header data={data} />}
      <main>
        <Routes>
          <Route
            index
            path="/login"
            element={<LoginPage isLogin={auth} login={useAuth} />}
          />
          <Route
            path="/"
            element={
              <Main
                data={data}
                totalPage={totalPage}
                dataSlice={dataSlice}
                paginationPage={paginationPage}
              />
            }
          />
          <Route path="/right" element={<RightSide />} />
          <Route path="/right/project" element={<Project />} />
          <Route path="/repository" element={<Repository data={data} />} />
        </Routes>
      </main>
      {pathname === "/login" ? "" : <Footer />}
    </>
  );
};

export default App;
