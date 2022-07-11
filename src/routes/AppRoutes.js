import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../containers/LandingPage'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<LandingPage/>} />
    </Routes>
    </BrowserRouter>
    
  )
}
