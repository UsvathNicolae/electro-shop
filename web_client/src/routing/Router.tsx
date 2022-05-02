import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import LandingPage from '../pages/LandingPage'
import ShopPage from '../pages/ShopPage'

const useStyles = makeStyles({
  container: {
    height: '100vh',
  },
  fullHeight: {
    height: '100%',
  },
})

const Router = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.fullHeight}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default Router