import { Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import React from "react";
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  appbar: {
    background: 'gray'
  }
})


const CustomNavbar = () => {

  const styles = useStyles();

  return (
    <AppBar position="static" className={styles.appbar}>
      <Container maxWidth="xl">
        <Toolbar></Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomNavbar;
