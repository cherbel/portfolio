import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import Hero from "./components/Hero";
import Welcome from "./components/Welcome";

import "./App.css";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="welcome" element={<Welcome />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
