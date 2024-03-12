import { Box, Container, FormControl, Grid, MenuItem, NativeSelect, Select, Typography } from "@mui/material";
import Navbar from "../components/Navbar.jsx";
import { Label, Search } from "@mui/icons-material";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Products from "../components/Products.jsx";
import marketplace from "../data/marketplace.js";
import InputLabel from '@mui/material/InputLabel';
import { useState } from "react";

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
    if (value === "lowToHigh") {
      marketplace.sort((a, b) => a.amount - b.amount)
    } else if (value === "highToLow") {
      marketplace.sort((a, b) => b.amount - a.amount)
    } else if (value === "lowRatings") {
      marketplace.sort((a, b) => a.rating - b.rating)
      console.log(marketplace)
    } else if (value === "highRatings") {
      marketplace.sort((a, b) => b.rating - a.rating)
      console.log(marketplace)
    }
  }

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
                onChange={(e) => {
                  console.log(e.target.value)
                  setSearch(e.target.value)
                }}
                value={search}
              />
            </Search>
          </Box>
        </Box>
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
                  <MenuItem value="sort(low-high)" onClick={() => handleSort('lowToHigh')}>sort(low-high)</MenuItem>
                  <MenuItem value="sort(high-low)" onClick={() => handleSort('highToLow')}>sort(high-low)</MenuItem>
                  <MenuItem value="highest rated" onClick={() => handleSort('highRatings')}>highest rating</MenuItem>
                  <MenuItem value="lowest rated" onClick={() => handleSort('lowRatings')}>lowest rating</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Grid container sx={{ padding: "30px" }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6, md: 8 }} justifyContent="space-around">
            {marketplace.filter((eachProd) => {
              return search.toLowerCase() === "" ? eachProd : eachProd.item.toLowerCase().includes(search)
            }).map((eachProd, index) => {
              return (
                <Grid item key={index}>
                  <Products
                    image={eachProd.image}
                    item={eachProd.item}
                    description={eachProd.description}
                    rating={eachProd.rating}
                    amount={eachProd.amount}
                  />
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
