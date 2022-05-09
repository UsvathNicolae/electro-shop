import React from "react";
import { Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles'
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
        marginTop: "10%"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    }
});

const ContactPage = () => {
    const styles = useStyles();

    return <div>
        <Navbar />
        <div className={styles.background}>
            <div className={ styles.container }>
                <Grid container flexDirection="column" className={styles.title}>
                    <Grid item>
                        <Typography variant="h2">
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

                <Grid container flexDirection="column"  className={styles.title}>
                    <Grid item>
                        <Typography variant="h2">
                            Program
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className = { styles.text } variant = "h3">
                            Monday-Friday
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className = { styles.text } variant = "h3">
                            09:00-18:00
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className = { styles.text } variant = "h3">
                            Saturday&Sunday
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className = { styles.text } variant = "h3">
                            Closed
                        </Typography>

                    </Grid>
                </Grid>

                <Grid container flexDirection="column"  className={styles.title}>
                    <Grid item>
                        <Typography variant="h2">
                            Contact us
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className = { styles.text } variant = "h3">
                            Email
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className = { styles.text } variant = "h3">
                            nicu.usvath@gmail.com
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className = { styles.text } variant = "h3">
                            Phone
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className = { styles.text } variant = "h3">
                            0741561212
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
        <img className={ styles.imageWrapper } src = "contact.jpg"></img>
    </div>;
};

export default ContactPage;
