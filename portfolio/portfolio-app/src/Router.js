import React from 'react'
import { Routes, Route, } from "react-router-dom";
import HomePage from './Pages/HomePage';



const Router = () => {
  return (
    <Routes>
      <Route path="/"
       element={
           <HomePage />
       }></Route>
</Routes>
  )
}

export default Router