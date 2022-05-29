import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";


import {useNavigate} from "react-router-dom"
import DeleteIcon from "@mui/icons-material/Delete"
import { Box } from '@material-ui/core';


const CartCard = (props :{
    id: string,
    title: string,
    price: number,
    img: string,
    description: string,
    deleteButton: (id: string) => void
}) => {
    const { id, title, price, img, description, deleteButton } = props;

    const navigate = useNavigate()

    const handleProductPage = () => {
        navigate(`/product/${id}`)
    }





    return (
        <Card sx={{width: 1000, display: 'flex', flexDirection: 'row', justifyContent:'space-between' }}>
            <CardMedia
                component="img"
                sx={{ height: 200, maxWidth: 200, flex: '1 0 auto' }}
                image={img}
                alt="Live from space album cover"
            />

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography gutterBottom variant="h4" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Box>
            <Box sx = {{ display: 'flex', flexDirection:'column', justifyContent: 'space-between'}}>
                <Typography/>
                <Typography variant="body1" color="text.secondary">
                    {price} RON
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton
                        sx = {{ mx:1 }}
                        edge="end"
                        aria-label="delete"
                        onClick={() => deleteButton(id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                    <Button sx = {{ mx:1 }} size="small" onClick={handleProductPage} variant="contained">Details</Button>
                </Box>
            </Box>
        </Card>
    );
}

export default CartCard