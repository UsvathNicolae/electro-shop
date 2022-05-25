import React, {useContext, useEffect, useState} from "react";
import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    Button,
    TextField
} from '@mui/material';
import { makeStyles } from '@mui/styles'
import Navbar from "../components/NavBar";
import LoginType from "../types/loginType";
import {useAppDispatch, useAppSelector} from "../redux/hooks"
import { setOpen } from "../redux/reducers/snackbarReducer"
import { useNavigate } from "react-router-dom";
import {itemAdded} from "../redux/reducers/usernameReducer";
import { addRole } from "../redux/reducers/roleReducer";
import {CartLength} from "../routing/Router";


const useStyles = makeStyles({})

const LoginPage = () => {
    const styles = useStyles()
    const navigate = useNavigate()
    const myContext = useContext(CartLength);

    const [loginData, setLoginData] = useState <LoginType>({
        email:"",
        password:"",
    })

    const [disable, setDisable] = useState<boolean>(true)

    const dispatch = useAppDispatch()

    useEffect(() => {
        const bool = !loginData.email || !loginData.password
        setDisable(bool)
    },[loginData])

    const handleOnChange = (e:any) => {
        e.preventDefault()
        setLoginData({
            ...loginData,[e.target.name]:e.target.value
        })
    }

    const handleOnSubmit = async () =>{

        await fetch("http://localhost:8080/user/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData),
        }).then((data) => data.json()).then( (data) => {
            if(data.token){
                localStorage.setItem('token', data.token)
                localStorage.setItem('user', data.user)
                dispatch(addRole({
                    role: data.role,
                }))
            }
            if(data.message){
                navigate("/")
                myContext.setLength(!myContext.length)
                dispatch(setOpen({
                    success: true,
                    message: "Authentication successfully"
                }))
            }else{
                dispatch(setOpen({
                    success: false,
                    message: "Authentication failed"
                }))
            }

        }).catch((error) => {
            console.error(error)
        })

        setLoginData({
            email:"",
            password:"",
        })
    }

    const handleSignUp = () => {
        navigate("/register")
    }

    return (
        <div>
            <Typography variant = "h3" marginTop = "10vh" color = "#acebd3">
                Login
            </Typography>
            <form>
            <TableContainer style = {{ marginTop: "10vh", margin: "auto", width: "20%" }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Typography>
                                    Email:
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <TextField
                                    name = "email"
                                    type = "text"
                                    id = "standard-required"
                                    label = "Email"
                                    placeholder = "email@address.com"
                                    variant = "standard"
                                    onChange = {(e:any) => handleOnChange(e)}
                                    value = { loginData.email }
                                />

                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Typography>
                                    Password:
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <TextField
                                    name = "password"
                                    id="standard-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="standard"
                                    onChange = {(e:any) => handleOnChange(e)}
                                    value = { loginData.password }
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align = "center">
                                <Button color="primary" variant="contained" onClick = { handleOnSubmit } disabled={ disable }>
                                    Login
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </form>
            <Typography  color = "primary">
                Don't have an account?
            </Typography>
            <Button color = "primary" variant = "contained" onClick = { handleSignUp }>
                Sign up
            </Button>
        </div>
    )
}

export default LoginPage