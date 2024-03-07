
import { Box, Grid, Button, CardActions, Card, CardMedia, Typography, CardContent, Paper } from "@mui/material";
import Cards from "../components/Cards.jsx"
import { experimentalStyled as styled } from '@mui/material/styles';
const Groups = () => {

  return (
    <>
      <Grid container sx={{ padding: "30px" }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6, md: 8 }} justifyContent="space-around">
        <Grid item>

          <Cards image="https://plus.unsplash.com/premium_photo-1676901712447-4395959ac6cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnR8ZW58MHx8MHx8fDA%3D" title="SOCCER" description="Play Soccer with Friends" />

        </Grid>
        <Grid item>

          <Cards image="https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
            title="GYMNASTICS" description="Do Gym with Your Friends" />

        </Grid>
        <Grid item>

          <Cards image="https://images.unsplash.com/photo-1444491741275-3747c53c99b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0fGVufDB8fDB8fHww" title="CYCLING" description="Go Cycling with your Friends" />

        </Grid>
        <Grid item>

          <Cards image="https://plus.unsplash.com/premium_photo-1682535209615-e8dd65e7bf44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3dpbW1pbmd8ZW58MHx8MHx8fDA%3D" title="SWIMMING" description="Go Swimming with your Friends" />

        </Grid>
        <Grid item>

          <Cards image="https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
            title="GYMNASTICS" description="Do Gym with Your Friends" />

        </Grid><Grid item>

          <Cards image="https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
            title="GYMNASTICS" description="Do Gym with Your Friends" />

        </Grid><Grid item>

          <Cards image="https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
            title="GYMNASTICS" description="Do Gym with Your Friends" />

        </Grid><Grid item>

          <Cards image="https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
            title="GYMNASTICS" description="Do Gym with Your Friends" />

        </Grid><Grid item>

          <Cards image="https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
            title="GYMNASTICS" description="Do Gym with Your Friends" />
        </Grid>

        <Grid item>

          <Cards image="https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
            title="GYMNASTICS" description="Do Gym with Your Friends" />

        </Grid>
  
      </Grid>

    </>
  )
};

export default Groups
