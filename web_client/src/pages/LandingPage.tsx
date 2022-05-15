import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import Navbar from "../components/NavBar";
import MenuButton from "../components/MenuButton";

const useStyles = makeStyles({
  background: {
    position: "relative",
  },
  videoWrapper: {
    position: "absolute",
    top: 0,
    zIndex: -9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    boxSizing: "border-box",
    background: "rgba(0,0,0,.4)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    overflow: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 200,
  },
  overlayContent: {
    marginTop: 200,
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    fontFamily: "Cookie",
  },
  subTitle: {
    fontFamily: "Cookie",
    color: "white",
  },
});

const LandingPage = () => {
  const styles = useStyles();

  return (
    <div>
      <div className={styles.overlay}>
        <div className={styles.overlayContent}>
          <Typography className={styles.title} variant="h1" color="secondary">
            Electro Shop
          </Typography>
          <Typography className={styles.subTitle} variant="h4" color="secondary">
            Welcome to the best electronics shop in town!
          </Typography>
          <div className={styles.buttonContainer}>
            <MenuButton
              variant="contained"
              color="secondary"
              route="/shop"
            >
              Shop Now!
            </MenuButton>
          </div>
        </div>
      </div>
      <div className={styles.videoWrapper}>
        <video className={styles.background} loop autoPlay muted>
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default LandingPage;
