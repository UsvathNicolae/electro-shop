import { Grid, makeStyles, Typography } from "@material-ui/core"
import React, { useContext, useEffect, useState } from "react"
import Navbar from "../components/NavBar"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from '@mui/material/IconButton';

import { deleteCartItem, getCartItems } from "../service/shopPageService"
import { setClose, setOpen } from "../redux/reducers/snackbarReducer"
import CustomMenuButton from "../components/MenuButton"
import { useAppDispatch } from "../redux/hooks"
import { CartLength } from "../routing/Router"

interface ListProduct {
  productId: string
  productName: string
  price: number
  img: string
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
})

const ContactPage = () => {
  const styles = useStyles()

  const dispatch = useAppDispatch()
  const myContext = useContext(CartLength);
  const [cartItems, setCartItems] = useState<ListProduct[]>()
  const [reload, setReload] = useState<boolean>(false)

  useEffect(() => {
    fetchCartItems()
  }, [reload])

  const fetchCartItems = async () => {
    try {
      const data = await getCartItems("/user/getCartProducts")
      if (data) {
        setCartItems(data.cartItems)
      }
    } catch (error: any) {
      console.error(error)
    }
  }

  const onDeleteItem = async (id: string) => {
    try{
      const response = await deleteCartItem("/user/deleteCartItem",id)
      if(response){
        setReload(!reload)
        dispatch(setOpen({
          message: response.message,
          success: true
        }))
        myContext.setLength(!myContext.length)
      }
    }catch (error: any) {
      console.error(error)
    }
  }

  const onPlaceOrder = () => {
    try{

    } catch (error: any) {
      console.error(error)
    }
  }

  if (!cartItems) {
    return <div></div>
  } else
    return (
      <div className={styles.container}>
        <Typography>Shopping Cart</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360 }}
          style={{ border: "1px solid black" }}
        >
          {cartItems.map((item: ListProduct,index: number) => {
            return (
              <div key={index}>
                <ListItem
                  alignItems="flex-start"
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => onDeleteItem(item.productId)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar alt="img" src={item.img} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.productName}
                    secondary={
                      <React.Fragment>
                        <Typography component="span" variant="body2">
                          {item.price}
                        </Typography>
                        {" lei"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            )
          })}
        </List>
        <CustomMenuButton
          variant="contained"
          color="primary"
          onClick={onPlaceOrder}
        >
          Order now
        </CustomMenuButton>
      </div>
    )
}

export default ContactPage
