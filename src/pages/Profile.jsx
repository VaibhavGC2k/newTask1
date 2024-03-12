import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider, Tooltip } from '@mui/material';
import { addDoc, collection } from "firebase/firestore"
import { query, where, getDocs } from 'firebase/firestore';
import { auth, database } from '../firebase-config';
import { useEffect } from 'react';


const defaultTheme = createTheme();

async function getData() {
  const currentUserEmail = await auth.currentUser.email;
  console.log(currentUserEmail)
  const q = query(collection(database, 'userDb'), where('email', '==', currentUserEmail));
  getDocs(q)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const userId = doc.id;
        console.log({
          firstName: doc.get("firstName"),
          lastName: doc.get("lastName"),
          password: doc.get("password")
        });

      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    })
}


export default function Profile() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      providedFirstName: data.get("firstName"),
      providedLastName: data.get("lastName"),
      providedPassword: data.get("password")
    })
  };

  return (
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
            sx={{ mt: 3, mb: 2, borderRadius: "0px" }}
          >
            Update Info
          </Button>
        </Box>
      </Box>

    </Container>

  );
}