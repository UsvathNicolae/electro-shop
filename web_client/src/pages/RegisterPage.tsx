import React from "react";
import {Typography, Grid, Table, TableBody, TableCell, TableRow, TableContainer, Button, Snackbar, Alert} from '@mui/material';
import { makeStyles } from '@mui/styles'
import Navbar from "../components/NavBar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import RegisterType from "../types/registerType";

const useStyles = makeStyles({
    fieldsContainer:{
        flexDirection: "row",
        //justifyContent: "center"
    },
    container:{
        flexDirection: "column",
        justifyContent: "center"
    }
});



const RegisterPage = () => {

    const [open, setOpen] = React.useState(false);



    const styles = useStyles();
    const [registerData, setRegisterData] = useState <RegisterType>({
        email:"",
        username:"",
        password:"",
        confirmedPassword:"",
    })

    const [disable, setDisable] = useState<boolean>(false)

    const [success,setSuccess] = useState("")

    useEffect(() => {
        if(registerData.password === registerData.confirmedPassword){
            const bool = !registerData.email || !registerData.username || !registerData.password || !registerData.confirmedPassword
            setDisable(bool)
        }
    },[registerData])


    const handleOnSubmit = async () =>{
         await fetch("http://localhost:8080/user/post", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData),
        }).then((data) => data.json()).then((data) => {
            setSuccess("Registered successfully")
             handleClick()
        }).catch((error) => {console.error(error)})
        setRegisterData({
            email:"",
            username:"",
            password:"",
            confirmedPassword:"",
        })
    }

    const handleOnChange = (e:any) => {
        e.preventDefault()
        setRegisterData({
            ...registerData,[e.target.name]:e.target.value
        })
    }
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccess("");
        setOpen(false);
    };

    return <div>
        <Navbar />
        <Typography variant = "h3" marginTop = "10vh" color = "#acebd3">
            Create an account
        </Typography>
        <TableContainer style={{margin: "auto", width: "25%", marginTop:"10vh"}} sx={{boxShadow:3}}>
            <Table >
                <TableBody>
                    <TableRow>
                        <TableCell align = "left">
                            <Typography>
                                Email:
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <TextField
                                type = "text"
                                name = "email"
                                required
                                id = "standard-required"
                                label = "Required"
                                placeholder = "email@address.com"
                                value = { registerData.email }
                                variant = "standard"
                                onChange = {(e:any) => handleOnChange(e)}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align = "left">
                            <Typography>
                                Username:
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <TextField
                                type = "text"
                                name = "username"
                                required
                                id="standard-required"
                                label="Required"
                                value={ registerData.username }
                                variant="standard"
                                onChange = {(e:any) => handleOnChange(e)}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align = "left">
                            <Typography>
                                Password:
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <TextField
                                type = "text"
                                name = "password"
                                required
                                id="standard-required"
                                label="Required"
                                value={ registerData.password }
                                variant="standard"
                                onChange = {(e:any) => handleOnChange(e)}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align = "left">
                            <Typography>
                                Confirm password:
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <TextField
                                type = "text"
                                name = "confirmedPassword"
                                required
                                id="standard-required"
                                label="Required"
                                value={ registerData.confirmedPassword }
                                variant="standard"
                                onChange = {(e:any) => handleOnChange(e)}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align = "center">
                            <Button color="primary" variant="contained" onClick={handleOnSubmit} disabled={ disable }>
                                Sign Up
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

        <Snackbar open={open} autoHideDuration={10000} onClose={handleClose} anchorOrigin={{vertical:"top",horizontal: "right" }}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                { success }
            </Alert>
        </Snackbar>
    </div>;
};

export default RegisterPage;
