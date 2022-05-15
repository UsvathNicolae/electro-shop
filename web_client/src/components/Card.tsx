import { makeStyles, Typography } from "@material-ui/core"
import React, {useContext} from "react"
import Navbar from "../components/NavBar"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import {useAppDispatch} from "../redux/hooks"
import { setClose, setOpen } from "../redux/reducers/snackbarReducer"
import { useNavigate } from "react-router-dom";
import {addToCart} from "../service/productPageService";
import {CartLength} from "../routing/Router";

const useStyles = makeStyles({})

const CustomCard = ( props: {
  id: number,
  title: string,
  price: number,
  description: string,
  img: string,
  quantity: number,
}) => {
  const { id, title, price, description, img, quantity } = props;
  const styles = useStyles()
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const myContext = useContext(CartLength);

  const handleProductPage = () => {
      navigate(`/product/${id}`)
  }

  const handleAddToCart = async () => {
    try {
      const response = await addToCart({ productId: id })
      if(response){
        dispatch(setOpen({
          message: response.message,
          success: true
        }))
        myContext.setLength(!myContext.length)
      }
    }catch (e: any){
      console.error(e)
      dispatch(setOpen({
        message: 'Could not add item to cart',
        success: false
      }))
    }
  }

  return (
    <div>
      <Card sx={{ maxWidth: 345, minWidth: 300 }}>
        <CardMedia component="img" height={200} image={img} />
        <CardContent>
          <Typography style={{padding: '5px'}}>{title}</Typography>
          <Typography style={{padding: '5px'}} variant="body2">
            {description}
          </Typography>
          <Typography style={{padding: '5px'}}>
            {price} RON
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleProductPage} variant="contained">Details</Button>
          {
            quantity > 0 ?
                <Button size="small" onClick={handleAddToCart} variant="outlined" color="success">
                  Add to cart
                </Button>
                :
                <Button size="small" variant="outlined" color="error">
                  Out of stock
                </Button>
          }

        </CardActions>
      </Card>
    </div>
  )
}

export default CustomCard
