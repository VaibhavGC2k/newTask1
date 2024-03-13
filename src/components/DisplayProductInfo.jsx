import React, { useEffect, useState } from 'react'
import marketplace from '../data/marketplace'
import { Link, useParams } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Rating, Tooltip, Typography } from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function DisplayProductInfo() {
    const [data, setData] = useState({});
    const { prodId } = useParams();
    useEffect(() => {
        setData(marketplace[prodId]);
    }, [])
    return (
        // data && <img src={data.image} />
        <>
            <Box >

                <Card sx={{ minWidth: 300, maxWidth: 350, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <CardMedia
                        component="img"
                        alt="img"
                        sx={{ maxHeight: "500px", maxWidth: "450px", minHeight: "350px", minWidth: "350px" }}
                        image={data.image}
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            minHeight: {
                                xs: "100px",
                                md: "50px"
                            },
                            flexDirection: {
                                xs: 'column',
                                md: "row"
                            },
                            justifyContent: "space-around",
                            xs: {
                                alignItems: "center",

                            },
                            md: {
                                alignItems: "flex-start"
                            },
                            padding: "10px"
                        }}
                    >
                        {/* <Link to={index.toString()}> */}
                        <Button
                            variant="outlined"
                            color="primary"
                            // onClick={() => console.log(marketplace[index])}
                            startIcon={<FlashOnIcon />}
                            sx={{
                                "&:hover": {
                                    backgroundColor: "blue", // Change background color on hover
                                    color: "white"
                                },

                            }}
                        >
                            Buy
                        </Button>
                        {/* </Link> */}
                        <Button
                            variant="outlined"
                            color="primary"
                            // onClick={() => console.log(index)}
                            endIcon={<AddShoppingCartIcon sx={{}} />}
                            sx={{

                                "&:hover": {
                                    backgroundColor: "blue", // Change background color on hover
                                    color: "white"
                                },
                                display: {
                                    xs: "block" // Display as block only for extra small screens
                                },
                            minWidth:"200px"
                            }}
                        >
                            Add to Cart
                        </Button>
                    </Box>
                </Card>

            </Box>
        </>
    )
}
