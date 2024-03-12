import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config"
import { useState } from "react";
import { SnackbarProvider, useSnackbar } from 'notistack';
const defaultTheme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (re.test(e.target.value) || !e.target.value) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError(emailError === true || !email);
    if (
      !emailError &&
      email
    ) {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        localStorage.setItem("token", user.user.accessToken)
        handleSuccessMessage('success')
        navigate('/homepage')
      } catch (error) {

        setErrorMessage(error.message)
        console.log(error)
      }
    }
  };

  function handleSuccessMessage(variant) {
    enqueueSnackbar('You have logged in successfully!!', { variant });
    console.log("success message worked")
  };
  return (
    <ThemeProvider theme={defaultTheme}>
       
      <Container >

        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
          // sx={{ mt: 1 }}
          >
            <span class="notranslate">

              <TextField
                margin="normal"
                error={emailError}
                helperText={emailError ? "Enter valid Email" : ""}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleEmailChange}
                autoComplete="email"
                autoFocus
              />
            </span>

            <span class="notranslate">
              <TextField
                margin="normal"

                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handlePasswordChange}
                autoComplete="current-password"
              />
            </span>

            {errorMessage ? <Box component="section" sx={{ p: 2, border: '1px dashed red', color: 'red' }}>
              {errorMessage}
            </Box> : ""}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
