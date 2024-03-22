import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Divider, Tooltip, createTheme } from '@mui/material';
import { collection, doc, getDoc, updateDoc } from "firebase/firestore"
import { getDocs } from 'firebase/firestore';
import { auth, database } from '../firebase-config';
import { useState } from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Alert, Snackbar } from '@mui/material';

const defaultTheme = createTheme();

export default function Profile() {
  const [userId, setUserId] = useState(null)
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  })
  const [error, setError] = useState(false)

  useEffect(() => {
    getUserId()
  }, [])

  //get user id and info
  async function getUserId() {
    try {
      const userCollection = collection(database, "userDb");
      const data = await getDocs(userCollection);
      data.docs.forEach(async (user) => {
        const User = doc(userCollection, user.id);
        const response = await getDoc(User);
        const data = response.data();
        if (auth.currentUser.email === data.email) {
          setUserId(user.id)
          console.log("ididdidiid", data)
          setUser({
            firstName: data.firstName,
            lastName: data.lastName,
          })
        }
      })
    } catch (error) {
      console.log(
        `There was an error fetching the data in firestore: ${error}`
      );
    }
  }


  //update user info
  const setDocument = async (id, firstName, lastName, password) => {
    try {
      const usersCollection = collection(database, 'userDb');
      const userRef = doc(usersCollection, id);

      const selectedUser = {
        firstName,
        lastName,
        password
      }
      await updateDoc(userRef, selectedUser);
      setOpenSnackbar(true);
    } catch (error) {
      console.log(`Error in setDocument: ${error}`)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      if (data.get("password") === data.get("confirmPassword")) {
        setError(false)
        setDocument(userId, data.get("firstName"), data.get("lastName"), data.get("password"),)
      } else {
        setError(true)
        throw new Error("Password did not match")
      }
    } catch (error) {
      console.log(error.message)
    }
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: "center",
              alignItems: 'center',
              backgroundColor: "rgba(190, 207, 235,1)",
              padding: "10px",
            }}
          >
            <Typography variant='h4' sx={{ backgroundColor: "rgb(90, 123, 224)", color: "#deedee", padding: "10px", margin: "10px", width: "100%" }} >Profile</Typography>
            <Avatar sx={{ bgcolor: "rgb(90, 123, 224)", width: 56, height: 56 }}>
              <Tooltip title="User">
                <Typography component="h1" variant="h5">
                  <Divider>
                    U
                  </Divider>
                </Typography>
              </Tooltip>
            </Avatar>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={user?.firstName}
                    onChange={(e) => setUser({
                      firstName: e.target.value
                    })}
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={user?.lastName}
                    onChange={(e) => setUser({
                      lastName: e.target.value
                    })}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    autoComplete="new-password"
                    onChange={(e) => setUser({
                      password: e.target.value
                    })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm-Password"
                    type="password"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    id="confirm-password"
                    autoComplete="new-password"
                    onChange={(e) => setUser({
                      confirmPassword: e.target.value
                    })}
                  />
                </Grid>
              </Grid>
              {error && <Box component="section" sx={{ p: 2, border: '1px dashed red', color: 'red' }}>
                "Password did not Match"
              </Box>}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 3, mb: 2, borderRadius: "0px", width: {
                    xs: "100%",
                    sm: "70%",
                    md: "60%"
                  }
                }}
              >
                Update Info
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
                  Information Updated Successfully!!
                </Alert>
              </Snackbar>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}