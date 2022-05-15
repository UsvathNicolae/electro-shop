import React, {useEffect} from "react"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import { makeStyles } from "@mui/styles"
import LandingPage from "../pages/LandingPage"
import ShopPage from "../pages/ShopPage"
import CartPage from "../pages/CartPage"
import ContactPage from "../pages/ContactPage"
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";


const useStyles = makeStyles({
  container: {
    height: "100vh",
  },
  fullHeight: {
    height: "100%",
  },
})

const Router = () => {
  const classes = useStyles()
  const token = localStorage.getItem('token')

  return (
    <div className={classes.container}>
      <div className={classes.fullHeight}>
        <BrowserRouter>
          { !token?
              <Routes>
                <Route path = "*" element ={<Navigate to="/login"/> }/>
                <Route path="/" element={<LandingPage />} />
                <Route path = "/login" element ={<LoginPage/> }/>
                <Route path = "/register" element ={<RegisterPage/> }/>
              </Routes>
              :
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />}/>
              </Routes>
            }
        </BrowserRouter>
      </div>
    </div>
  )
}

export default Router
