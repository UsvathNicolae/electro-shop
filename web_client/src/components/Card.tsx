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

const useStyles = makeStyles({})

const CustomCard = () => {
  const styles = useStyles()

  const dispatch = useAppDispatch()

  const addToCart = () => {
    dispatch(
      setOpen({
        message: "Succesfully added to cart!",
        success: true,
      })
    )
  }

  return (
    <div>
      <Card sx={{ maxWidth: 345, minWidth: 300 }}>
        <CardMedia component="img" height="180" image="demo.jpg" />
        <CardContent>
          <Typography>Headphones</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Details</Button>
          <Button size="small" onClick={addToCart}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default CustomCard
