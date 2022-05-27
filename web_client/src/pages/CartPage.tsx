import { Typography } from "@material-ui/core"
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer, Paper,
} from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import Divider from "@mui/material/Divider"

import { deleteCartItem, getCartItems } from "../service/shopPageService"
import { setClose, setOpen } from "../redux/reducers/snackbarReducer"
import CustomMenuButton from "../components/MenuButton"
import { useAppDispatch } from "../redux/hooks"
import { CartLength } from "../routing/Router"
import { postOrder } from "../service/orderPageService"
import CartCard from "../components/ShopingCartCard";

interface ListProduct {
  productId: string
  productName: string
  price: number
  img: string
  description: string,
}




const ContactPage = () => {

  const dispatch = useAppDispatch()
  const myContext = useContext(CartLength)
  const [cartItems, setCartItems] = useState<ListProduct[]>([])
  const [reload, setReload] = useState<boolean>(false)
  const [price, setPrice] = useState<number>(0)

  useEffect(() => {
    fetchCartItems()
  }, [reload])

  useEffect(() => {
    let sum = 0;
    cartItems.map((item:ListProduct) => {
      sum = sum + item.price
    })
    setPrice(sum)
  }, [cartItems])

  const EmptyCart = () => {
    return (
        <div>
          <Typography align="center" >Your cart is empty</Typography>
        </div>
    )
  }

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
    try {
      const response = await deleteCartItem("/user/deleteCartItem", id)
      if (response) {
        setReload(!reload)
        dispatch(
            setOpen({
              message: response.message,
              success: true,
            })
        )
        myContext.setLength(!myContext.length)
      }
    } catch (error: any) {
      console.error(error)
    }
  }

  const onPlaceOrder = async () => {
    try {
      const response = await postOrder()
      if (response) {
        setReload(!reload)
        dispatch(
          setOpen({
            message: response.message,
            success: true,
          })
        )
        myContext.setLength(!myContext.length)
      }
    } catch (error: any) {
      dispatch(
        setOpen({
          message: error.message,
          success: false,
        })
      )
    }
  }

  if (!cartItems) {
    return <div></div>
  } else
    return (
      <div>
        <Typography variant = "h3" style = {{ marginTop:"4vh" }}>Shopping Cart</Typography>
        {cartItems.length === 0 ? (<EmptyCart></EmptyCart>):
            (
        <Grid container style = {{ marginTop:"4vh" }} flexDirection="row" justifyContent="space-evenly">
          <Grid item>
              {cartItems.length === 0 ? (
                  <div/>
              ) : (
                  cartItems.map((item: ListProduct, index: number) => {
                    return (
                        <Paper component = 'div' sx = {{ mb:2 }} key = {index}>
                          <CartCard
                              deleteButton = { onDeleteItem }
                              id={ item.productId }
                              img={item.img}
                              price={item.price}
                              description = {item.description}
                              title={item.productName}
                          />
                        </Paper>
                    )
                  })
              )}
          </Grid>
          <Grid item>
            { cartItems.length === 0 ? (<div/>):(
            <TableContainer sx={{boxShadow:3}}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography variant = "h5">
                        Subtotal
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant = "h5">
                        { price } RON
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant = "h5">
                        Shipping
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant = "h5">
                        { price > 1000? 0 : 25 } RON
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant = "h5">
                        Total
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant = "h5">
                        { price + (price > 500? 0 : 25) } RON
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            )}
            <CustomMenuButton
                variant="contained"
                color="primary"
                onClick={onPlaceOrder}
                disabled={cartItems.length === 0}
            >
              Order now
            </CustomMenuButton>
          </Grid>
        </Grid>
            )}

      </div>
    )
}

export default ContactPage
