import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { database } from '../firebase-config';
import { useState } from 'react';
import { addDoc, collection } from "firebase/firestore"
import { auth } from "../firebase-config"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Alert, Snackbar } from '@mui/material';

const defaultTheme = createTheme();

export default function SignUp() {
    const [user, setUser] = useState({
        
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })
    const value = collection(database, "userDb")
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = new FormData(event.currentTarget);
            setUser({
                ...user,
                ...Object.fromEntries([...data.entries()])
            });
            const userDoc = await createUserWithEmailAndPassword(auth, data.get("email"), data.get("password"))
            await addDoc(value, { ...user, ...Object.fromEntries([...data.entries()]),uid:userDoc.user.uid })
            setOpenSnackbar(true);
            event.target.reset()
        } catch (error) {
            console.log(error.message)
        }

    };

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: "30px"
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{
                        mt: 3,
                    }} >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
                            <Alert
                                onClose={handleClose}
                                severity="success"
                                variant="filled"
                                sx={{
                                    display: {
                                        sx: {
                                            width: "40%"
                                        },
                                        sm: {
                                            width: "60%"
                                        }
                                    }
                                }}
                            >
                                User Registered Successfully!!
                            </Alert>
                        </Snackbar>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider >
    );
}