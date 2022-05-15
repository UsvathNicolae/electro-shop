import React from "react";
import { Typography, Table, TableBody, TableCell, TableRow, TableContainer, Button } from '@mui/material';
import Navbar from "../components/NavBar";
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import RegisterType from "../types/registerType";
import { setOpen } from "../redux/reducers/snackbarReducer";
import { useAppDispatch } from "../redux/hooks"


const RegisterPage = () => {

    const dispatch = useAppDispatch()

    const [disable, setDisable] = useState<boolean>(false)

    const [registerData, setRegisterData] = useState <RegisterType>({
        email:"",
        username:"",
        password:"",
        confirmedPassword:"",
    })

    useEffect(() => {
        const bool = !registerData.email || !registerData.username || !registerData.password || !registerData.confirmedPassword || !(registerData.password === registerData.confirmedPassword)
        setDisable(bool)
    },[registerData])

    const handleOnSubmit = async () =>{
         await fetch("http://localhost:8080/user/post", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData),
        }).then((data) => data.json()).then((data) => {
             console.log(data)
             if(data.message){
                 dispatch(setOpen({
                     success: false,
                     message: "An account with this email already exists"
                 }))
             }else{
                 dispatch(setOpen({
                     success: true,
                     message: "Account created successfully"
                 }))
             }
        }).catch((error) => {
            console.error(error)
        })
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

    return <div>
        <Navbar />
        <Typography variant = "h3" marginTop = "10vh" color = "#04243c">
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
                                type = "password"
                                name = "password"
                                required
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
                                type = "password"
                                name = "confirmedPassword"
                                required
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
    </div>;
};

export default RegisterPage;
