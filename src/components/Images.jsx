import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Grid } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useSelector } from "react-redux";
import Loading from "./Loading";
const Images = () => {
  const imagesData = useSelector((state) => state.images.data)
  const isLoading = useSelector((state) => state.images.isLoading)
  if (imagesData) {
    console.log("this is images data", imagesData[0])
  }
  const renderImages = () => {
    if (imagesData) {
      return <>
        {
          imagesData.slice(0, 15).map((eachImage) => {
            return (

              <Card sx={{ maxWidth: 345 }} className="images">
                <CardHeader
                  avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    {eachImage.id}
                  </Avatar>}
                  action={<IconButton aria-label="settings">
                  </IconButton>}
                  title={eachImage.title}
                  subheader="September 14, 2016" />
                <CardMedia
                  component="img"
                  height="194"
                  image={eachImage.thumbnailUrl} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            );
          })
        }
      </>
    }
  }
  return (
    <>
      <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6, md: 8 }} justifyContent="space-around" >

        {
          isLoading ? <Loading /> : renderImages()
        }
      </Grid>
    </>
  )
};

export default Images
