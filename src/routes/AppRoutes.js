import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '../containers/LandingPage'
import { Login } from '../components/Login'
import { Register } from '../components/Register'
import { Business } from '../containers/Business'
import { RegisterAdmi } from '../containers/RegisterAdmi'
import { LandingPageEn } from '../containers/LandingPageEn'


export const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Register />} />
        <Route path="/business" element={<Business />} />
        <Route path="/bienvenido" element={<RegisterAdmi />} />
        <Route path="/En" element={<LandingPageEn />} />
      </Routes>
    </BrowserRouter>

  )
}
