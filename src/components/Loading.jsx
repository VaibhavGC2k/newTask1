import React from 'react';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Skeleton, CardActions } from '@mui/material';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

const Loading = () => {
    const randomImagesCount = Math.floor(Math.random() * 6) + 5;
    const cards = []

    const renderLoading = () => {

        return <Card sx={{ minWidth: 345 }}>
            <CardHeader avatar={<Avatar><Skeleton variant='circular' width={40} height={40}></Skeleton></Avatar>}>
                <Skeleton variant="rectangular" width={300} height={200} />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </CardHeader>
            <CardMedia height="194">
            </CardMedia>
            <CardContent>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
                <Skeleton variant='circular' width={40} height={40}></Skeleton>
                <Skeleton variant='circular' width={40} height={40}></Skeleton>
            </CardActions>
        </Card>

    }
    for (let i = 0; i < parseInt(randomImagesCount); i++) {
        cards.push(renderLoading())
    }
    return (
        <>


            {cards}

        </>

    );
};

export default Loading;
