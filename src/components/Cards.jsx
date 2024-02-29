import {Box,Grid,Button,CardActions,Card,CardMedia,Typography,CardContent,Paper} from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';
const Cards = ({image,title,description}) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

          <Grid item xs={2} sm={4} md={4}>
            <Item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="img"
                  height="140"
                  image={image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  )
};

export default Cards
