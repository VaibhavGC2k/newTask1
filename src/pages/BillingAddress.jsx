import { Box, TextField } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { deepOrange } from "@mui/material/colors"
export default function BillingAddress() {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexDirection: "column" }}>
                <PersonIcon />
                <TextField placeholder='Full Name' size="small" />
                <EmailIcon />
                <TextField placeholder='Email' size="small" />
                <ApartmentIcon />
                <TextField placeholder='Address' size="small" />
                <AccountBalanceIcon />
                <TextField placeholder='State' size="small" />
                <Box sx={{
                    display: "flex", flexDirection: {
                        xs: "column",
                        sm: "row"
                    },
                    justifyContent: "space-between",
                    gap: 2
                }}>
                    <TextField placeholder='City' size="small" />
                    <TextField placeholder='Zip' size="small" />
                </Box>
            </Box>
        </>
    )
}
