import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./route/Home";
import Detail from "./route/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
