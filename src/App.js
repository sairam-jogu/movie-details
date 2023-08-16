import "./styles.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./myFiles/Home";
import Movies from "./myFiles/Movies";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TrendingList from "./components/TrendingList";
import Header from "./components/Header";
import MovieDetails from "./myFiles/MovieDetails";
import Contact from "./myFiles/Contact";
import Footer from "./myFiles/Footer";
import Search from "./components/Search";
import SignUp from "./Pages/SignUp";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const UsersProvider = createContext();

export default function App({}) {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    userInfo != "undefined" &&
      setUserInfo(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(userInfo));
    if (userInfo === null) {
      localStorage.setItem("currentUser", JSON.stringify(""));
      setUserInfo("");
    }
  }, [userInfo]);

  return (
    <>
      <UsersProvider.Provider
        value={{ users: userInfo, setUsers: setUserInfo }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/:type/:id" element={<MovieDetails />} />

            <Route path="/trending" element={<TrendingList />} />
            <Route path="/:type" element={<Movies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UsersProvider.Provider>
    </>
  );
}

// api_key = d736a51c9aacefa567f5604c57f76b95
