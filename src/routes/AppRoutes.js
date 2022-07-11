import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '../containers/LandingPage'
import { Login } from '../components/Login'
import { Register } from '../components/Register'


export const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>
       <Route path='/' element={<LandingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Register />} />
      </Routes>
    </BrowserRouter>

  )
}
