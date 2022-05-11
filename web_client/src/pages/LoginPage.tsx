import React from "react";
import {
    Typography,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    Button,
    Snackbar,
    Alert,
    TextField
} from '@mui/material';
import { makeStyles } from '@mui/styles'
import Navbar from "../components/NavBar";


const useStyles = makeStyles({})

const LoginPage = () => {
    const styles = useStyles()

    return (
        <div>
            <Navbar />
            <Typography variant = "h3" marginTop = "10vh" color = "#acebd3">
                Login
            </Typography>
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
                                    type = "text"
                                    id = "standard-required"
                                    label = "Email"
                                    placeholder = "email@address.com"
                                    variant = "standard"
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
                                    id="standard-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="standard"
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default LoginPage