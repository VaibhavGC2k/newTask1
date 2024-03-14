import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {
  Avatar,
  Badge,
  Button,
  FormControlLabel,
  Menu,
  MenuItem,
  Switch,
  ThemeProvider,
  Tooltip,
  createTheme,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch,useSelector } from "react-redux";
import {
  AccountBox,
  Article,
  Group,
  Settings,
  Storefront,
} from "@mui/icons-material";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useMediaQuery from "@mui/material/useMediaQuery";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { enqueueSnackbar } from "notistack";
import cartSlice from "../features/cartSlice";
import CartItemsModal from "./CartItemsModal";

const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => {
    const md = useMediaQuery(theme.breakpoints.up("md"));
    const marginLeft = md && open ? "240px" : "10px";

    return {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: marginLeft,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    };
  }
);
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const ITEM_HEIGHT = 48;

export default function Navbar() {
  const [user, setUser] = useState({});
  const [open, setOpen] = React.useState(true);

  const theme = useTheme();
  const [mode, setMode] = useState("light");
  const handleDarkToggle = () => {
    if (mode === "dark") {
      setMode("light")
    } else {
      setMode("dark")
    }
  }
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
    typography: {
      color: "white",
    },
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const TotalCartQuantity = useSelector(state=>state.cart.cartTotalQuantity)
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const logout = async () => {
    localStorage.removeItem("token");
    handleLogout("error")
    await signOut(auth);
    navigate("/welcome");
  };

  function handleLogout(variant) {
    enqueueSnackbar('You have logged out successfully!!', { variant });

  };

  //this is cart open close functionality
  const [openCart, setOpenCart] = useState(false);
  // const handleCartOpen = () => setOpenCart(true);


  return (
    <ThemeProvider theme={darkTheme}>

      <CssBaseline />

      <AppBar
        sx={{
          position: "fixed",
          top: "0px",
          right: "0px",
          backgroundColor: "rgb(64, 114, 230)"
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <span className="notranslate">
            <Typography variant="h6">
              <span
                style={{
                  color: "rgb(8, 32, 89)",
                  fontFamily: "Rubik Bubbles",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Blue
              </span>
              <span
                style={{
                  color: "white",
                  fontFamily: "Shadows Into Light",
                  fontSize: "20px",
                }}
              >
                Horizon
              </span>
            </Typography>
          </span>

          <MenuItem sx={{
            '&:hover': {
              backgroundColor: "transparent"
            }
          }}>

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{
                alignSelf: "right"
              }}
              onClick={()=>setOpenCart(true)}
            >
              <Tooltip title="Cart">
                <Badge badgeContent={TotalCartQuantity} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </Tooltip>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                },
              }}
            >
              <Tooltip title="Messages">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </Tooltip>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                },
              }}
            >
              <Tooltip title="Notifications">
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </Tooltip>
            </IconButton>

            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={openMenu ? "long-menu" : undefined}
              aria-expanded={openMenu ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                  md: "none",
                },
              }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              sx={{
                display: {
                  sm: "none",
                },
              }}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              <MenuItem
                onClick={handleClose}
                sx={{
                  padding: "0px", margin: "0px",
                }}
              >
                <IconButton>
                  <p style={{ fontSize: "20px" }}>Notifications</p>
                  <span className="notranslate">
                    <Badge badgeContent={6} color="error">
                      <MailIcon />
                    </Badge>
                  </span>
                </IconButton>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{ padding: "0px", margin: "0px" }}
              >
                <IconButton>
                  <p style={{ fontSize: "20px" }}>Messages</p>
                  <Badge badgeContent={4} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{ padding: "0px", margin: "0px" }}
              >
                <Button
                  sx={{ color: "#00aeff" }}
                  endIcon={<LogoutIcon />}
                  onClick={logout}
                >
                  Logout
                </Button>
              </MenuItem>
            </Menu>

            <Button
              color="inherit"
              onClick={logout}
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                },
              }}
            >
              Logout
            </Button>
          </MenuItem>
        </Toolbar>
      </AppBar>

      <Drawer
        // variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: "rgb(64, 114, 230)" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              padding: "8px",
              backgroundColor: "rgb(64, 114, 230)",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1686593981963-c3e108260adb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              sx={{ width: 56, height: 56, mr: 1 }}
            />
            <span className="notranslate">
              <Typography variant="h6">
                <span
                  style={{
                    color: "rgb(8, 32, 89)",
                    fontFamily: "Rubik Bubbles",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                >
                  Blue
                </span>
                <span
                  style={{
                    color: "white",
                    fontFamily: "Shadows Into Light",
                    fontSize: "15px",
                  }}
                >
                  Horizon
                </span>
              </Typography>
            </span>

          </Box>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box
          sx={{
            padding: "10px",
            gap: "5px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: "rgb(31, 86, 204)" }} variant="square">
            {user.email && user.email.charAt(0).toUpperCase()}
          </Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "5px",
            }}
          >
            <Typography variant="h6">{user.email}</Typography>
            <Typography fontSize="15px" fontFamily="cursive">
              user
            </Typography>
          </Box>
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 0}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "royalblue",
                  color: "white",
                },
              }}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <NavLink
                to="homepage"
                style={{ textDecoration: "none", color: `${mode === "light" ? "black" : "white"}` }}
              >
                <ListItemText primary="Homepage" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 1}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "royalblue",
                  color: "white",
                },
              }}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <NavLink
                to="groups"
                style={{ textDecoration: "none", color: `${mode === "dark" ? "white" : "black"}` }}
              >
                <ListItemText primary="Groups" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 2}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "royalblue",
                  color: "white",
                },
              }}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <NavLink
                to="marketplace"
                style={{ textDecoration: "none", color: `${mode === "dark" ? "white" : "black"}` }}
              >
                <ListItemText primary="Marketplace" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 3}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "royalblue",
                  color: "white",
                },
              }}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <NavLink
                to="settings"
                style={{ textDecoration: "none", color: `${mode === "dark" ? "white" : "black"}` }}
              >
                <ListItemText primary="Settings" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selectedIndex === 4}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "royalblue",
                  color: "primary",
                },
                "&:hover": { backgroundColor: "inherit" },
              }}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <NavLink
                to="profile"
                style={{
                  textDecoration: "none", color: `${mode === "dark" ? "white" : "black"}`
                }}
              >
                <ListItemText primary="Profile" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} />}
                label={mode === "light" ? "Dark Theme" : "Light Theme"}
                onClick={handleDarkToggle}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
      <CartItemsModal openCart={openCart} setOpen={setOpenCart} />
    </ThemeProvider >
  );
}
