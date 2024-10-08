import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Loging from './pages/Loging';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Loging />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/" element={<Netflix />} />
    </Routes>
    </BrowserRouter>
  );
}
