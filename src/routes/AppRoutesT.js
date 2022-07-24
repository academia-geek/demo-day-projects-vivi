import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppRoute } from "./admiRoutes/AppRouesAdmi"
import { AppRoutes } from "./AppRoutes"


export const AppRoutesT = () => {
  return (
        <BrowserRouter>
          <Routes>
            <Route
             path="/*"
            element={
                <AppRoute/>
            }
            />
          <Route
          path="/*"
          element={
           <AppRoutes/>
          }
        />
          </Routes>
          </BrowserRouter>
      
  )
}
