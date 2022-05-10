import { Grid, makeStyles, Typography } from "@material-ui/core"
import Button from "@mui/material/Button"
import React, { useEffect } from "react"
import CustomCard from "../components/Card"
import Navbar from "../components/NavBar"
import CustomSnackBar from "../components/SnackBar"
import { useAppDispatch } from "../redux/hooks"
import { setOpen } from "../redux/reducers/snackbarReducer"

const useStyles = makeStyles({
  container: {
    margin: 30,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 30,
  },
  page: {
    backgroundColor: "#beccc2",
  },
})

const ShopPage = () => {
  const styles = useStyles()

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  )
}

export default ShopPage
