import styled from '@emotion/styled'
import { Grid, Paper } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function ConfirmationPage() {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount)
    const Item = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            <Grid container spacing={2}>
                {cartItems.map((eachItem) => (
                    <Grid item xs={6} md={8}>
                        <Item>{eachItem.item}{" "}
                            {eachItem.amount}{" "}
                            {eachItem.cartQuantity}{" "}
                            {eachItem.cartQuantity * eachItem.amount}{" "}

                        </Item>
                    </Grid>
                ))}
                {cartTotalAmount}
            </Grid>
        </>
    )
}
