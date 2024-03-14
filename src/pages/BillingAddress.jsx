import { Box, TextField } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
export default function
    () {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexDirection: "column" }}>
                <PersonIcon />
                <TextField placeholder='Full Name' />
                <EmailIcon />
                <TextField placeholder='Email' />
                <ApartmentIcon />
                <TextField placeholder='Address' />
                <AccountBalanceIcon />
                <TextField placeholder='State' />
                <TextField placeholder='City' />
                <TextField placeholder='Zip' />
            </Box>
        </>
    )
}
