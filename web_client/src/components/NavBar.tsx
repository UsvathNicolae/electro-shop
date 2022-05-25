import {Badge, Container, Typography} from "@mui/material"
import Toolbar from "@mui/material/Toolbar"
import AppBar from "@mui/material/AppBar"
import React, {useState, useEffect, useContext} from "react"
import { makeStyles } from "@mui/styles"
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"
import MenuIcon from "@mui/icons-material/Menu"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import FullScreenMenu from "./Menu"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { useNavigate, useLocation } from "react-router-dom"
import {get} from "../service/axios";
import {itemAdded} from "../redux/reducers/usernameReducer";
import {CartLength} from "../routing/Router";
import decode from 'jwt-decode';

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
  customBadge: {
    backgroundColor: 'red'
  }
})

const CustomNavbar = () => {
  const styles = useStyles()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState('')
  const [cartLength, setCartLength] = useState<number>(0)
  const location = useLocation();
  const myContext = useContext(CartLength);

  useEffect(() => {
    if(!localStorage.getItem('token') && location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !== '/'){
      navigate('/login')
    }
  },[location] )

  useEffect(() => {
    if(localStorage.getItem('token')){
      getCartNoOfProducts()
    } else {
      setCartLength(0);
    }

    if(localStorage.getItem('user')){
      setUser(localStorage.getItem('user') as string)
    } else {
      setUser('')
    }

  },[myContext.length])

  useEffect(() => {
    checkExpiredToken('token');
  }, [location]);

  const checkExpiredToken = (token: string) => {
    if (localStorage.getItem(token)) {
      const tokenToCheck = localStorage.getItem(token);
      if (tokenToCheck) {
        const decodedToken: any = decode(tokenToCheck);
        if (decodedToken.exp * 1000 < new Date().getTime()) {
            myContext.setLength(!myContext.length)
            dispatch(itemAdded({
              username: '',
            }))
            localStorage.clear()
        }
      }
    }
  };

  const getCartNoOfProducts = async () => {
    if (localStorage.getItem('token')){
      const data: { cartLength: number } = await get('/user/getNumberOfProducts')
      if(data){
        setCartLength(data.cartLength)
        dispatch(itemAdded({
          length: data.cartLength
        }))
      }
    }
  }

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

                <Typography variant="h5" sx={{px: 3, py:2}}>
                  {user}
                </Typography>

            {
              cartLength > 0 ?
                  <Badge
                      classes={{ badge: styles.customBadge }}
                      badgeContent={cartLength}
                      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                  >
                    <Button
                        style={{ border: '1px solid white'}}
                        onClick={cartClick}
                    >
                      <ShoppingCartIcon style={{color: 'white'}}/>
                    </Button>
                  </Badge>
                  :
                  <Button
                      style={{ border: '1px solid white'}}
                      onClick={cartClick}
                  >
                    <ShoppingCartIcon style={{color: 'white'}}/>
                  </Button>
            }

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
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
