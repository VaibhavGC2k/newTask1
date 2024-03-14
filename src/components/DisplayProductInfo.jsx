import React, { useEffect, useState } from 'react'
import marketplace from '../data/marketplace'
import { useParams } from 'react-router-dom';
import { Box, Button, Card, CardMedia, Tooltip } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { addToCart, deleteFromCart } from '../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { enqueueSnackbar } from 'notistack';
export default function DisplayProductInfo() {

    const [data, setData] = useState({});
    const { prodId } = useParams();
    useEffect(() => {
        setData(marketplace[prodId]);
    }, [])

    const itemsInCart = useSelector((state) => state.cart.cartItems.length)
    console.log(console.log(itemsInCart))
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart(data))


    }
    const handleRemoveFromCart = () => {
        if (itemsInCart !== 0) {
            dispatch(deleteFromCart(data))
        } else {
            showEmptyCartAlert("success")
            console.log("worked")
        }

    }

    const showEmptyCartAlert = (variant) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('No Items to Remove from Cart', { variant });
    };
    return (
        <>
            <Card elevation={0} sx={{
                minWidth: 300,
                maxWidth: 450,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "5px",
                gap: 2,
                border: "1px solid white",
                position: "fixed"
            }}>
                <CardMedia
                    component="img"
                    alt="img"
                    sx={{ maxHeight: "500px", maxWidth: "450px", minHeight: "350px", minWidth: "350px" }}
                    image={data.image}
                />

                <Box sx={{
                    display: "flex", flexDirection: {
                        xs: "column",
                        md: "row"
                    },
                    justifyContent: {
                        md: "space-around"
                    }
                    , gap: 1,
                }}>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleAddToCart}
                        startIcon={<AddShoppingCartIcon />}
                        sx={{
                            "&:hover": {
                                backgroundColor: "blue",
                                color: "white"
                            },

                        }}


                    >
                        Add to Cart
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleRemoveFromCart}
                        startIcon={<RemoveShoppingCartIcon />}
                        sx={{
                            "&:hover": {
                                backgroundColor: "blue",
                                color: "white"
                            },

                        }}

                    >
                        Remove from Cart
                    </Button>
                </Box>
                <Box>

                </Box>
            </Card>


        </>
    )
}
