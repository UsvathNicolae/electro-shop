import { makeStyles, Typography } from "@material-ui/core"
import React from "react"
import Navbar from "../components/NavBar"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import { useAppDispatch } from "../redux/hooks"
import { setClose, setOpen } from "../redux/reducers/snackbarReducer"
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({})

const CustomCard = ( props: {
  id: number,
  title: string,
  price: number,
  description: string,
  img: string,
}) => {
  const { id, title, price, description, img } = props;
  const styles = useStyles()
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const addToCart = () => {
    dispatch(
      setOpen({
        message: "Succesfully added to cart!",
        success: true,
      })
    )
  }
  
  const handleProductPage = () => {
      navigate(`/product/${id}`)
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
          <Button size="small" onClick={handleProductPage}>Details</Button>
          <Button size="small" onClick={addToCart}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default CustomCard
