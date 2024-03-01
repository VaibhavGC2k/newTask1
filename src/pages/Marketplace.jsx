import { Box, Container, Grid, Typography } from "@mui/material";
import Navbar from "../components/Navbar.jsx";
import { Search } from "@mui/icons-material";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Products from "../components/Products.jsx";
const Marketplace = () => {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'white',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),

      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  return (
    <>

      <Container>
        <Box sx={{ minWidth: "100%", minHeight: "40%", padding: "10%", marginTop: "20px", backgroundColor: "rgb(48, 92, 194)" }}>
          <Box>
            <Typography color="white" variant="h4">10,000+ Products and Designs starting from just 1$.. </Typography>
          </Box>
          <Box>
            <Typography fontSize="18px" color="rgb(192, 197, 209)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae explicabo sed minus, odit fugiat maiores rem esse, sapiente dignissimos assumenda. Quo at atque assumenda tempore voluptatem sequi minus porro!</Typography>
          </Box>
          <Box sx={{ padding: "10px" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h6" fontWeight="bold">Latest Products</Typography>
            <Typography fontSize="15px">Hand picked products from last 30days</Typography>
          </Box>

          <Grid container sx={{ padding: "30px" }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6, md: 8 }} justifyContent="space-around">
            <Grid item>
              <Products
                image="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsbCUyMHhwc3xlbnwwfHwwfHx8MA%3D%3D"
                item="Dell XPS 13"
                description="13.3-inch FHD, Intel Core i5, 8GB RAM, 256GB SSD"
                rating="3.5"
                amount="1299"
              />
            </Grid>
            <Grid item>
              <Products
                image="https://images.unsplash.com/photo-1593442607435-e4e34991b210?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JTIyQXBwbGUlMjBBaXJQb2RzJTIwUHJvJTIyfGVufDB8fDB8fHww"
                item="Apple AirPods Pro"
                description="Active Noise Cancellation, Transparency Mode"
                rating="2.8"
                amount="249"
              />
            </Grid><Grid item>
              <Products
                image="https://images.unsplash.com/photo-1564135624576-c5c88640f235?w=500&auto=format&fit=crop&q=60&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fHxlbnwwfHx8fA%3D%3D"
                item="Samsung Galaxy S21 Ultra"
                description="6.8-inch Quad HD+ AMOLED, Snapdragon 888, 12GB RAM, 128GB Storage"
                rating="1.7"
                amount="1199"
              />
            </Grid><Grid item>
              <Products
                image="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U29ueSUyMFdIJTIwMTAwMFhNNCUyMFdpcmVsZXNzJTIwSGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
                item="Sony WH-1000XM4 Wireless Headphones"
                description="Industry-Leading Noise Cancellation, Alexa Built-in"
                rating="3.9"
                amount="349"
              />
            </Grid><Grid item>
              <Products
                image="https://images.unsplash.com/photo-1585857188849-f44983e4a509?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE5pbnRlbmRvJTIwU3dpdGNofGVufDB8fDB8fHww"
                item="Nintendo Switch"
                description="Handheld Gaming Console, Neon Blue/Neon Red"
                rating="4.0"
                amount="299"
              />
            </Grid><Grid item>
              <Products
                image="https://images.unsplash.com/photo-1514076529215-03662283365b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2Fub24lMjBFT1MlMjA5MER8ZW58MHx8MHx8fDA%3D"
                item="Canon EOS 90D"
                description="32.5MP APS-C CMOS Sensor, DIGIC 8, 4K Video"
                rating="3.5"
                amount="1199"
              />
            </Grid><Grid item>
              <Products
                image="https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXBwbGUlMjBXYXRjaCUyMFNlcmllcyUyMDZ8ZW58MHx8MHx8fDA%3D"
                item="Apple Watch Series 6"
                description="GPS + Cellular, 44mm, Aluminum Case"
                rating="5.0"
                amount="499"
              />
            </Grid><Grid item>
              <Products
                image="https://images.unsplash.com/photo-1610196600828-517131fddddd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9zZXxlbnwwfHwwfHx8MA%3D%3D"
                item="Bose QuietComfort 35 II"
                description="Wireless Bluetooth Headphones, Noise Cancelling"
                rating="4.5"
                amount="299"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
};

export default Marketplace
