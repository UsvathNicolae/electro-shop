import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import NavBar from "../components/NavBar";
import { getProductById } from "../service/shopPageService";
import Product from "../types/Product";
import {Button, Grid, Typography} from "@mui/material";

const useStyles = makeStyles({
    page: {
        width:'100%',
        height: '100%',
        backgroundColor: "#beccc2",
    },
})

const ProductPage = () => {
    const styles = useStyles()
    const { id } = useParams()
    const [product, setProduct] = useState<Product>({
        id: 0,
        description: '',
        img: '',
        price: 0,
        quantity: 0,
        title: '',
        productName: ''
    })
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        if(id){
            try {
                const product = await getProductById('/product/get', id)
                setProduct({
                    id: product.id,
                    description: product.description,
                    img: product.img,
                    price: product.price,
                    quantity: product.quantity,
                    title: product.title,
                    productName: product.productName
                })
            } catch (e){
                console.error(e)
            }
        }
    }

    const handleAddToCart = () => {
        console.log('added');
    }

    return(
        <div className={styles.page}>
            <NavBar />
            <Grid container flexDirection="row" style={{margin: 'auto', width: '50%', height: '89vh'}}>
                <Grid item>
                    <img alt="img" src={product?.img}/>
                </Grid>
                <Grid item style={{marginLeft: '20px'}}>
                    <Grid container flexDirection="column">
                        <Grid item style={{padding: '5px'}}>
                            <Typography>
                                {product.title}
                            </Typography>
                        </Grid>
                        <Grid item style={{padding: '5px'}}>
                            <Typography>
                                {product.description}
                            </Typography>
                        </Grid>
                        <Grid item style={{padding: '5px'}}>
                            <Typography>
                                Price: {product.price} RON
                            </Typography>
                        </Grid>
                        <Grid item style={{padding: '5px'}}>
                            <Typography style={product.quantity > 0 ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
                                {
                                    product.quantity > 0 ?
                                        'In stock'
                                    :
                                        'Out of stock'
                                }
                            </Typography>
                        </Grid>
                        <Grid item style={{padding: '5px'}}>
                            <Typography>
                                <Button color="primary" variant="contained" onClick={handleAddToCart}>
                                    Add to cart
                                </Button>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductPage