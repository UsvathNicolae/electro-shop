import React from "react"
import { Typography, Grid } from "@mui/material"
import { makeStyles } from "@mui/styles"
import Navbar from "../components/NavBar"

const useStyles = makeStyles({
  background: {
    position: "relative",
    zIndex: -1,
    top: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "88vh",
    width: "100%",
  },
  imageWrapper: {
    position: "absolute",
    top: 0,
    zIndex: -2,
    display: "flex",
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: "Buxton Sketch",
    color: "white",
  },
  title: {
    color: "#acebd3",
    marginTop: "5%",
    fontFamily: "Buxton Sketch",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
})

const ContactPage = () => {
  const styles = useStyles()

  return (
    <div>
      <Navbar />
      <div className={styles.background}>
        <Grid container flexDirection="column">
          <Grid item className={styles.title} marginTop="5%">
            <Typography variant="h2" fontFamily="Buxton Sketch">
              Stay in touch
            </Typography>
          </Grid>
          <Grid item>
            <div className={styles.container}>
              <Grid container flexDirection="column" className={styles.title}>
                <Grid item>
                  <Typography variant="h2" fontFamily="Buxton Sketch">
                    Address
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={styles.text}
                    fontFamily="Buxton Sketch"
                    variant="h3"
                  >
                    City
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={styles.text}
                    fontFamily="Buxton Sketch"
                    variant="h3"
                  >
                    Timisoara
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={styles.text}
                    fontFamily="Buxton Sketch"
                    variant="h3"
                  >
                    Street
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={styles.text}
                    fontFamily="Buxton Sketch"
                    variant="h3"
                  >
                    Bv. Vasile Parvan 2
                  </Typography>
                </Grid>
              </Grid>

              <Grid container flexDirection="column" className={styles.title}>
                <Grid item>
                  <Typography variant="h2" fontFamily="Buxton Sketch">
                    Program
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={styles.text}
                    fontFamily="Buxton Sketch"
                    variant="h3"
                  >
                    Monday-Friday
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={styles.text}
                    fontFamily="Buxton Sketch"
                    variant="h3"
                  >
                    10:00-18:00
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={styles.text}
                    fontFamily="Buxton Sketch"
                    variant="h3"
                  >
                    Saturday-Sunday
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={styles.text}
                    fontFamily="Buxton Sketch"
                    variant="h3"
                  >
                    Closed
                  </Typography>
                </Grid>
              </Grid>

              <Grid container flexDirection="column" className={styles.title}>
                <Grid item>
                  <Typography variant="h2" fontFamily="Buxton Sketch">
                    Contact us
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={styles.text}
                    fontFamily="Buxton Sketch"
                    variant="h3"
                  >
                    Email
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={styles.text}
                    fontFamily="Buxton Sketch"
                    variant="h3"
                  >
                    nicu.usvath@gmail.com
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={styles.text}
                    fontFamily="Buxton Sketch"
                    variant="h3"
                  >
                    Phone
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    className={styles.text}
                    fontFamily="Buxton Sketch"
                    variant="h3"
                  >
                    0741561212
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
      <img className={styles.imageWrapper} src="contact.jpg"></img>
    </div>
  )
}

export default ContactPage
