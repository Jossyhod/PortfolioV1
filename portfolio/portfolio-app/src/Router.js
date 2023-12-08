import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Footer from './components/Footer/Footer';


const Router = () => {
  return (
    <Routes>
      <Route path="/"
       element={
           <HomePage />
       }></Route>

      {/* <Route path = "/#contact"
       element={
           <Footer />
       }></Route> */}

      {/* <Route path="/"
       element={
           <HomePage />
       }></Route>

      <Route path="/"
       element={
           <HomePage />
       }></Route>

      <Route path="/"
       element={
           <HomePage />
       }></Route>

      <Route path="/"
       element={
           <HomePage />
       }></Route> */}

    </Routes>
  )
}

export default Router