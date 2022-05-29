import React, {useEffect, useState, useRef, useContext} from "react"
import { makeStyles } from "@mui/styles"
import Drawer from "@mui/material/Drawer"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import CancelIcon from "@mui/icons-material/Cancel"
import MenuButton from "./MenuButton"
import { SocialIcon } from "react-social-icons"
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {itemAdded} from "../redux/reducers/usernameReducer";
import {useNavigate} from "react-router-dom";
import {CartLength} from "../routing/Router";

const useStyles = makeStyles({
  menu: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    marginTop: 100,
  },
  buttonContainer: {
    alignSelf: "flex-end",
    padding: 15,
  },
  grow: {
    flexGrow: 1,
  },
  social: {
    marginTop: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  socialButton: {
    margin: 30,
  },
})

const FullScreenMenu = (p: { open: boolean; closeDrawer: () => void }) => {
  const styles = useStyles()
  const user = useAppSelector((state) => state.username)
  const dispatch = useAppDispatch()
  const closeBtn = useRef<any>();
  const userRole = useAppSelector((state) => state.role)
  const myContext = useContext(CartLength);

  const handleLogout = () => {
    p.closeDrawer
    myContext.setLength(!myContext.length)
    dispatch(itemAdded({
      username: '',
    }))
    localStorage.clear()
    if(closeBtn.current)
      {
        closeBtn.current.click()
      }

  }

  return (
    <Drawer anchor="right" open={p.open}>
      <div className={styles.buttonContainer}>
        <IconButton
          ref={closeBtn}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 4 }}
          onClick={p.closeDrawer}
        >
          <CancelIcon />
        </IconButton>
      </div>
      <div className={styles.menu}>
        <div className={styles.list}>
          <MenuButton
            variant="contained"
            color="secondary"
            route="/"
            onClick={p.closeDrawer}
          >
            Homepage
          </MenuButton>
          <MenuButton
            variant="contained"
            color="primary"
            route="/shop"
            onClick={p.closeDrawer}
          >
            Shop now
          </MenuButton>
          <MenuButton
            variant="contained"
            color="primary"
            route="/cart"
            onClick={p.closeDrawer}
          >
            Go to shopping cart
          </MenuButton>
          <MenuButton
            variant="contained"
            color="primary"
            route="/contact"
            onClick={p.closeDrawer}
          >
            Contact us
          </MenuButton>
          {
              user.username === '' &&
              <MenuButton
                  variant="contained"
                  color="primary"
                  route="/login"
                  onClick={p.closeDrawer}
              >
                Sign In
              </MenuButton>
          }
          {
              user.username !== '' &&
              <MenuButton
                  variant="contained"
                  color="primary"
                  route="/login"
                  onClick={handleLogout}
              >
                Logout
              </MenuButton>
          }
          {
              userRole.role === 'ADMIN' &&
              <MenuButton
                  variant="contained"
                  color="primary"
                  route="/addProduct"
                  onClick={p.closeDrawer}
              >
                Add product
              </MenuButton>
          }
          <div className={styles.grow}></div>
          <div className={styles.social}>
            <SocialIcon
              className={styles.socialButton}
              url="https://www.facebook.com/"
            />
            <SocialIcon
              className={styles.socialButton}
              url="https://www.instagram.com/"
            />
            <SocialIcon
              className={styles.socialButton}
              url="https://www.twitter.com/"
            />
          </div>
        </div>
      </div>
    </Drawer>
  )
}

export default FullScreenMenu
