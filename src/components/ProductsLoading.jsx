import React from 'react';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Skeleton, CardActions, Typography, Rating, Button, Box, Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';

const ProductsLoading = () => {
    const renderLoading = () => {
        return (
            <Card sx={{ minWidth: 200, maxWidth: 250, maxHeight: "550px", minHeight: "550px", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px" }}>
                <Skeleton variant="rectangular" sx={{ maxHeight: "250px", maxWidth: "250px", minHeight: "250px", minWidth: "250px" }} />
                <CardContent sx={{ padding: "8px" }}>
                    <Typography gutterBottom fontSize="20px" component="div" textAlign="left">
                        <Skeleton />
                    </Typography>
                    <Tooltip>
                        <Typography variant="body2" color="text.secondary" textAlign="left">
                            <Skeleton />
                        </Typography>
                    </Tooltip>
                </CardContent>
                <CardActions>
                    <Rating name="half-rating" readOnly />
                </CardActions>
                <CardActions>
                    <Typography fontWeight="bold"> <Skeleton /></Typography>
                </CardActions>
                <Box>
                         <Skeleton />
                </Box>
            </Card>
        )
    }

    return (
        <>
            {renderLoading()}
        </>

    );
};

export default ProductsLoading;
