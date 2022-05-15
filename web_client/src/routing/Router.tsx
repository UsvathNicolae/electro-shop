import React, {createContext, useState} from "react"
import {BrowserRouter, Navigate, Route, Routes, useLocation} from "react-router-dom"
import { makeStyles } from "@mui/styles"
import LandingPage from "../pages/LandingPage"
import ShopPage from "../pages/ShopPage"
import CartPage from "../pages/CartPage"
import ContactPage from "../pages/ContactPage"
import ProductPage from "../pages/ProductPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import Navbar from "../components/NavBar";
import NewProductPage from "../pages/NewProductPage";


const useStyles = makeStyles({
  container: {
    height: "100%",
    width: '100%'
  },
  fullHeight: {
    height: "100%",
    width: '100%'
  },
})

export const CartLength = createContext<{length?: boolean | null, setLength(value: boolean | null): void }>({
    setLength() {}
});

const Router = () => {
  const classes = useStyles()
  const [length, setLength] = useState<boolean | null>(false);

  return (
    <div className={classes.container}>
      <div className={classes.fullHeight}>
          <CartLength.Provider value={{length, setLength}} >
            <BrowserRouter>
              <Navbar />
                  <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/shop" element={<ShopPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/login" element={<LoginPage />}/>
                        <Route path="/product/:id" element={<ProductPage />} />
                        <Route path="/addProduct" element={<NewProductPage />} />
                  </Routes>
            </BrowserRouter>
          </CartLength.Provider>
      </div>
    </div>
  )
}

export default Router
