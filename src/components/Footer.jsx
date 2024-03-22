import { Copyright } from '@mui/icons-material'
import { Box, Container, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { blueGrey,blue } from '@mui/material/colors'
export default function Footer() {
    return (
        <>
            <Box
                component="footer"
                sx={{
                    position: "absolute",
                    minWidth: "100%",
                    left: 0,
                    bottom: 0,
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? "rgb(64, 114, 230)"
                            : theme.palette.grey[900],
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        My sticky footer can be found here.
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
        </>
    )
}
