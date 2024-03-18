import { Box, Container, FormControl, Grid, InputBase, MenuItem, NativeSelect, Select, TextField, Typography, createTheme } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';
// import Products from "../components/Products.jsx";
import SearchIcon from '@mui/icons-material/Search';
import marketplace from "../data/marketplace.js";
import InputLabel from '@mui/material/InputLabel';
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { Suspense } from "react";
import React from "react";
import ProductsLoading from "../components/ProductsLoading.jsx";

let products = marketplace.map((obj) => ({ ...obj }))
const Products = React.lazy(() => import("../components/Products.jsx"))

const Marketplace = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  }

  const handleSort = (value) => {
    if (value === "none") {
      products = [...marketplace]
    } else if (value === "lowToHigh") {
      products.sort((a, b) => a.amount - b.amount)
    } else if (value === "highToLow") {
      products.sort((a, b) => b.amount - a.amount)
    } else if (value === "lowRatings") {
      products.sort((a, b) => a.rating - b.rating)
    } else if (value === "highRatings") {
      products.sort((a, b) => b.rating - a.rating)
    }
  }

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1536 // large screens
      }
    }
  });

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
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
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  return (
    <>
      <Container>
        <ThemeProvider theme={theme}>
          <Box className="infoDisplayBox"
            sx={{
              minWidth: "100%",
              minHeight: "40%",
              padding: "10%",
              marginTop: "20px",
              backgroundColor: "rgb(48, 92, 194)",

            }}>
            <Box sx={{ backgroundColor: "rgba(141, 169, 217,0.4)" }}>
              <Typography color="white" variant="h4">10,000+ Products and Designs starting from just 1$.. </Typography>
            </Box>
            <Box>
              <Typography fontSize="18px" color="rgb(192, 197, 209)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae explicabo sed minus, odit fugiat maiores rem esse, sapiente dignissimos assumenda. Quo at atque assumenda tempore voluptatem sequi minus porro!</Typography>
            </Box>
            <Box sx={{ padding: "10px", display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                }}
              >
                {/* <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => {setSearch(e.target.value);console.log(e.target.value)}}
                  />
                </Search>  */}
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderColor: "transparent",
                      "&.Mui-hover fieldset": {
                        borderColor: "transparent"
                      }, "&:hover fieldset": {
                        borderColor: "transparent"
                      }
                    }, backgroundColor: "rgba(93, 149, 245,0.5)", color: "black"
                  }} fullWidth placeholder="Search…" onChange={(e) => { setSearch(e.target.value); console.log(e.target.value) }} />

              </Box>
            </Box>
          </Box>
        </ThemeProvider>
        <Box sx={{ marginTop: "10px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h6" fontWeight="bold">Latest Products</Typography>
              <Typography fontSize="15px">Hand picked products from last 30days</Typography>
            </Box>
            <Box>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-controlled-open-select-label">Filter</InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={filter}
                  label="Filter"
                  onChange={handleChange}
                >
                  <MenuItem value="none" onClick={() => handleSort('none')}>none</MenuItem>
                  <MenuItem value="sort(low-high)" onClick={() => handleSort('lowToHigh')}>sort(low-high)</MenuItem>
                  <MenuItem value="sort(high-low)" onClick={() => handleSort('highToLow')}>sort(high-low)</MenuItem>
                  <MenuItem value="highest rated" onClick={() => handleSort('highRatings')}>highest rating</MenuItem>
                  <MenuItem value="lowest rated" onClick={() => handleSort('lowRatings')}>lowest rating</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Grid container sx={{ padding: "30px" }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6, md: 8 }} justifyContent="space-around">
            {products.filter((eachProd) => {
              return search.toLowerCase() === "" ? eachProd : eachProd.item.toLowerCase().includes(search)
            }).map((eachProd, index) => {
              return (
                <Grid item key={index} >
                  <Suspense fallback={<ProductsLoading />}>
                    <Products
                      index={index}
                      image={eachProd.image}
                      item={eachProd.item}
                      description={eachProd.description}
                      rating={eachProd.rating}
                      amount={eachProd.amount}
                    />
                  </Suspense>
                </Grid>
              )
            }
            )}
          </Grid>
        </Box>
      </Container >
    </>
  )
};

export default Marketplace
