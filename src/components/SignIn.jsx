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
const defaultTheme = createTheme();

export default function SignIn() {
  const dummyEmail = "vaibhav@gmail.com";
  const dummyPass = "12345";
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
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
        localStorage.setItem("token",user.user.accessToken)
        navigate('/homepage')
      } catch (error) {
        setPasswordError(true)
        console.log(error.message)
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgb(194, 217, 245)",
            padding: "30px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
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
                error={passwordError}
                helperText={passwordError ? "Wrong Password" : ""}
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
