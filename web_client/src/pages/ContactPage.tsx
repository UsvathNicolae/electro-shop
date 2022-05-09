import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Navbar from "../components/NavBar";

const useStyles = makeStyles({
    background: {
        position: "relative",
        zIndex: -1,
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
        fontFamily: "Calibri",
        color: "white",

    },
    title: {
        fontFamily: "Algerian",
        color: "yellow",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    }
});

const ContactPage = () => {
    const styles = useStyles();

    // @ts-ignore
    return <div>
        <Navbar />
        <div className={styles.background}>
            <div className={ styles.container }>
                <Grid container flexDirection='column'>
                    <Grid item>
                        <Typography className={ styles.title}>
                            Address
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className = { styles.text } variant = "h3">
                            City
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className = { styles.text } variant = "h3">
                            Timisoara
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className = { styles.text } variant = "h3">
                            Street
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className = { styles.text } variant = "h3">
                            Bv. Vasile Parvan 2
                        </Typography>
                    </Grid>
                </Grid>

                <Typography className = {styles.title} variant = "h3">

                    <div>
                        Program
                        <Typography className = { styles.text } variant = "h3">
                            Monday-Friday
                        </Typography>
                        <Typography className = { styles.text } variant = "h3">
                            09:00-18:00
                        </Typography>
                        <Typography className = { styles.text } variant = "h3">
                            Saturday&Sunday
                        </Typography>
                        <Typography className = { styles.text } variant = "h3">
                            Closed
                        </Typography>

                    </div>
                </Typography>
                <Typography className = {styles.title} variant = "h3">

                    <div>
                        Contact us
                        <Typography className = { styles.text } variant = "h3">
                            Email
                        </Typography>
                        <Typography className = { styles.text } variant = "h3">
                            nicu.usvath@gmail.com
                        </Typography>
                        <Typography className = { styles.text } variant = "h3">
                            Phone
                        </Typography>
                        <Typography className = { styles.text } variant = "h3">
                            0741561212
                        </Typography>
                    </div>
                </Typography>
            </div>
        </div>
        <img className={ styles.imageWrapper } src = "contact.jpg"></img>
    </div>;
};

export default ContactPage;
