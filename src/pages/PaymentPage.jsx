import { Box, CardMedia, TextField, Typography } from '@mui/material'
import React from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PersonIcon from '@mui/icons-material/Person';

export default function PaymentPage() {
    const cards = [
        "https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-classic-card-498x280.png",
        "https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-classic-card-498x280.png",
        "https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-classic-card-498x280.png"
    ]
    return (
        <>
            <Box>
                <Typography>Accepted Cards</Typography>
                <br />
                {cards.map((card) => (
                    <img src={card} style={{ width: "50px", objectFit: " contain" }} />
                ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexDirection: "column" }}>
                <PersonIcon />
                <TextField placeholder='Card Holder Name' size="small" />
                <CreditCardIcon />
                <TextField placeholder='Card No' size="small" />

                <Box sx={{
                    display: "flex", flexDirection: {
                        xs: "column",
                        sm: "row"
                    },
                    justifyContent: "space-between",
                    gap: 2
                }}>
                    <TextField placeholder='Exp Month' size="small" />
                    <TextField placeholder='Exp Month' size="small" />
                    <TextField placeholder='CVV' size="small" />
                </Box>
            </Box>
        </>
    )
}
