import React from "react";
import { Sf } from "./components/Search";
import Quotes from "./components/Quotes";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Skills from "./pages/Skills";
import About from "./pages/About"
import { Navbar } from "./pages/Navbar";
import {Home} from './Home'
export const Routehandler = () => {
  return (
    <div>
      <Routes>
      <Route exact path='/' element={< Home />}/>
        <Route path="/" element={<Navbar />}>
          <Route path="/skills" element={<Skills />} />
          <Route path="/" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};
