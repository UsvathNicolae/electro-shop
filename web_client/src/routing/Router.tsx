import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { makeStyles } from "@mui/styles"
import LandingPage from "../pages/LandingPage"
import ShopPage from "../pages/ShopPage"
import CartPage from "../pages/CartPage"
import ContactPage from "../pages/ContactPage"
import ProductPage from "../pages/ProductPage";

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

const Router = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.fullHeight}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default Router
