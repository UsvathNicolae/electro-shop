import React, {useEffect, useState} from 'react'
import {Button, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import NewProduct from "../types/newProduct";
import {addProduct} from "../service/productPageService";
import {setOpen} from "../redux/reducers/snackbarReducer";
import {useAppDispatch} from "../redux/hooks";
import {useNavigate} from "react-router-dom";

const NewProductPage = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [disable, setDisable] = useState<boolean>(true)
    const [data, setData] = useState<NewProduct>({
        productName: '',
        title: '',
        price: 0,
        description: '',
        quantity: 0,
        img: '',
    })

    useEffect(() => {
        const bool = !data.productName || !data.title || !data.price || !data.description || !data.quantity || !data.img
        setDisable(bool)
    }, [data])

    const handleOnChange = (e:any) => {
        e.preventDefault()
        setData({
            ...data,[e.target.name]:e.target.value
        })
    }

    const convertBase64 = (file: any) => {
        if (file instanceof File) {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                try {
                    fileReader.readAsDataURL(file);

                    fileReader.onload = () => {
                        resolve(fileReader.result);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        }
    };

    const convertImg = async (e: any) => {
        const file = e.target?.files[0];
        if( file instanceof File){
            const base64: any = await convertBase64(file);
            setData({ ...data, img: base64 });
        }
    }

    const handleOnSubmit = async () => {
        try {
            const response = await addProduct(data)
            if(response){
                dispatch(setOpen({
                    success: true,
                    message: "New product successfully added"
                }))
            }
        } catch (e) {
            console.error(e)
            dispatch(setOpen({
                success: false,
                message: "Failed to add new product"
            }))
        }
        //clear
        setData({
            productName: '',
            title: '',
            price: 0,
            description: '',
            quantity: 0,
            img: '',
        })
        navigate('/')
    }

    return(
        <div>
            <Typography variant = "h3" marginTop = "5vh" color = "#04243c">
                Add a new product
            </Typography>
            <TableContainer style={{margin: "auto", width: "50%", marginTop:"5vh"}} sx={{boxShadow:3}}>
                <Table >
                    <TableBody>
                        <TableRow>
                            <TableCell align = "left">
                                <Typography>
                                    Product name:
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <TextField
                                    fullWidth
                                    type = "text"
                                    name = "productName"
                                    required
                                    label = "Required"
                                    placeholder = "Samsung S22"
                                    variant = "standard"
                                    value={data.productName}
                                    onChange = {(e:any) => handleOnChange(e)}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align = "left">
                                <Typography>
                                    Title:
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <TextField
                                    fullWidth
                                    type = "text"
                                    name = "title"
                                    required
                                    label="Required"
                                    variant="standard"
                                    value={data.title}
                                    onChange = {(e:any) => handleOnChange(e)}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align = "left">
                                <Typography>
                                    Price:
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <TextField
                                    fullWidth
                                    type = "number"
                                    name = "price"
                                    required
                                    label="Required"
                                    variant="standard"
                                    value={data.price}
                                    onChange = {(e:any) => handleOnChange(e)}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align = "left">
                                <Typography>
                                    Product description:
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <TextField
                                    fullWidth
                                    rows={2}
                                    type = "text"
                                    name = "description"
                                    required
                                    multiline
                                    label="Required"
                                    variant="standard"
                                    value={data.description}
                                    onChange = {(e:any) => handleOnChange(e)}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align = "left">
                                <Typography>
                                    Quantity:
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <TextField
                                    fullWidth
                                    type = "number"
                                    name = "quantity"
                                    required
                                    label="Required"
                                    variant="standard"
                                    value={data.quantity}
                                    onChange = {(e:any) => handleOnChange(e)}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align = "left">
                                <Typography>
                                    Product image:
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <TextField
                                    inputProps={{accept:"image/jpeg, image/png"}}
                                    fullWidth
                                    type = "file"
                                    name = "img"
                                    required
                                    label="Required"
                                    variant="standard"
                                    onChange={(e:any) => convertImg(e) }
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align = "left">
                                <Button color="primary" variant="contained" disabled={disable} onClick={handleOnSubmit}>
                                    Add product
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default NewProductPage