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

            <Card elevation={0} sx={{ 
                minWidth: 300,
                 maxWidth: 450, 
                 display: "flex",
                  flexDirection: "column", 
                  justifyContent: "space-between",
                   padding: "5px", 
                   gap: 2 ,
                   border:"1px solid white",
                   position:"fixed"
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
                    {/* <Link to={index.toString()}> */}
                    <Button
                        variant="outlined"
                        color="primary"
                        // onClick={() => console.log(marketplace[index])}
                        startIcon={<AddShoppingCartIcon />}
                        sx={{
                            "&:hover": {
                                backgroundColor: "blue", // Change background color on hover
                                color: "white"
                            },

                        }}
                    >
                        Add to Cart
                    </Button>
                </Box>
            </Card>


        </>
    )
}
