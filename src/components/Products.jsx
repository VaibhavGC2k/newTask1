import { Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material";

const Products = ({ image, item, description, rating, amount }) => {
  return (
    <>
      <Card sx={{ minWidth: 200, maxWidth: 250, }}>
        <CardMedia
          component="img"
          alt="img"
          sx={{ maxHeight: "250px", maxWidth: "250px", minHeight: "200px", minWidth: "200px" }}
          image={image}
        />
        <CardContent sx={{ padding: "8px" }}>
          <Typography gutterBottom fontSize="20px" component="div" textAlign="left">
            {item}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="left">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Rating name="half-rating" defaultValue={rating} readOnly />
        </CardActions>
        <CardActions>
          <Typography fontWeight="bold">{`₹` + amount}</Typography>
        </CardActions>
        <Box
          sx={{
            display: 'flex',
            minHeight: {
              xs: "100px",
              md: "50px"
            },
            flexDirection: {
              xs: 'column',
              md: "row"
            },
            justifyContent: "space-around",
            padding: "10px"
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            sx={{
              "&:hover": {
                backgroundColor: "blue", // Change background color on hover
                color: "white"
              }
            }}
          >
            Buy
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              "&:hover": {
                backgroundColor: "blue", // Change background color on hover
                color: "white"
              },
              display: {
                xs: "block" // Display as block only for extra small screens
              }
            }}
          >
            Add to Cart
          </Button>
        </Box>


      </Card>
    </>
  )
};

export default Products
