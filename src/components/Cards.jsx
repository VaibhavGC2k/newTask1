import { Button, CardActions, Card, CardMedia, Typography, CardContent, Paper } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
const Cards = ({ image, title, description }) => {

  return (
    <>
      <Card sx={{ minWidth: 200, maxWidth: 250, }}>
        <CardMedia
          component="img"
          alt="img"
          sx={{ maxHeight: "250px", maxWidth: "250px", minHeight: "200px", minWidth: "200px" }}
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
          <Button size="small" variant="contained" startIcon={<ShareIcon />}>

            Share
          </Button>
          <Button size="small">JOIN GROUP</Button>
        </CardActions>
      </Card>
    </>
  )
};

export default Cards
