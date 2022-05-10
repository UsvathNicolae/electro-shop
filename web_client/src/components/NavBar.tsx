import { Container } from "@mui/material"
import Toolbar from "@mui/material/Toolbar"
import AppBar from "@mui/material/AppBar"
import React, { useState } from "react"
import { makeStyles } from "@mui/styles"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import FullScreenMenu from "./Menu"
import { Typography } from "@material-ui/core"
import { useNavigate } from "react-router-dom"

const useStyles = makeStyles({
  appbar: {
    backgroundColor: "#04243c !important",
  },
  logo: {
    width: "175px",
    height: "90px",
    margin: "10px",
    borderRadius: 15,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontFamily: "Cookie",
  },
  whiteText: {
    color: "white",
  },
  grow: {
    flexGrow: 1,
  },
})

const CustomNavbar = () => {
  const styles = useStyles()
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(true)
  }

  const closeDrawer = () => {
    setOpen(false)
  }

  const cartClick = () => {
    navigate("/cart")
  }

  return (
    <>
      <AppBar position="sticky" style={{ zIndex: 1 }} className={styles.appbar}>
        <Container maxWidth="xl">
          <Toolbar>
            <img src="logo.png" alt="logo" className={styles.logo} />
            <div className={styles.grow}></div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={cartClick}
            >
              <ShoppingCartIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <FullScreenMenu open={open} closeDrawer={closeDrawer} />
    </>
  )
}

export default CustomNavbar
