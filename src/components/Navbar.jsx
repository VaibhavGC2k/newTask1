import React from "react";
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
import { Avatar, Badge, Button, FormControlLabel, Menu, MenuItem, Switch, Tooltip } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useSelector, useDispatch } from "react-redux";
// import { toggleDarkMode } from "../features/dark-mode-slice";
import {
  AccountBox,
  Article,
  Group,
  Settings,
  Storefront,
} from "@mui/icons-material";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useMediaQuery from '@mui/material/useMediaQuery';
const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => {
    const md = useMediaQuery(theme.breakpoints.up('md'));
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
export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const mode = useSelector((state) => state.darkMode)
  const [open, setOpen] = React.useState(true);

  const dispatch = useDispatch()
  const handleDrawerOpen = () => {
    setOpen(true);
  };

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
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{
          position: "fixed", top: "0px", right: "0px",
          backgroundColor: mode.mode ? null : "rgb(71, 71, 70)"
        }}>
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
            <span class="notranslate">

              <Typography variant="h6">
                <span style={{
                  color: 'rgb(8, 32, 89)', fontFamily: "Rubik Bubbles",
                  fontWeight: "bold",
                  fontSize: "30px"
                }}>Blue</span>
                <span style={{ color: 'white', fontFamily: "Shadows Into Light", fontSize: "20px" }}>Horizon</span>
              </Typography>
            </span>
            <MenuItem>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit"
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block"
                  }
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
                    md: "block"
                  }
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
                aria-controls={openMenu ? 'long-menu' : undefined}
                aria-expanded={openMenu ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{
                  display: {
                    xs: "block",
                    sm: "none",
                    md: "none"
                  }
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
                    sm: "none"
                  }
                }}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                <MenuItem onClick={handleClose} sx={{ padding: "0px", margin: "0px" }}>
                  <IconButton>
                    <p style={{ fontSize: "20px" }}>Notifications</p>
                    <span class="notranslate">
                      <Badge badgeContent={6} color="error" >
                        <MailIcon />
                      </Badge>
                    </span>
                  </IconButton>
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ padding: "0px", margin: "0px" }} >
                  <IconButton>
                    <p style={{ fontSize: "20px" }}>Messages</p>
                    <Badge badgeContent={4} color="error" >
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ padding: "0px", margin: "0px" }}>
                  <Button sx={{ color: "#00aeff" }} endIcon={<LogoutIcon />} onClick={() => navigate("/logout")}
                  >
                    Logout
                  </Button>
                </MenuItem>
              </Menu>

              <Button color="inherit" onClick={() => navigate("/logout")}
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block"
                  },

                }}
              >
                Logout
              </Button>
            </MenuItem>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        // variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ backgroundColor: mode.mode ? "rgb(64, 114, 230)" : "rgb(71, 71, 70)" }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: 'fit-content',
              padding: '8px',
              backgroundColor: mode.mode ? "rgb(64, 114, 230)" : "rgb(71, 71, 70)"
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1686593981963-c3e108260adb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              sx={{ width: 56, height: 56, mr: 1 }}
            />
            <span class="notranslate">
              <Typography variant="h6">
                <span style={{
                  color: 'rgb(8, 32, 89)', fontFamily: "Rubik Bubbles",
                  fontWeight: "bold",
                  fontSize: "25px"
                }}>Blue</span>
                <span style={{ color: 'white', fontFamily: "Shadows Into Light", fontSize: "15px" }}>Horizon</span>
              </Typography>
            </span>
          </Box>


          <IconButton onClick={handleDrawerClose} >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ backgroundColor: mode.mode ? null : "rgb(124, 124, 122)" }}>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <NavLink
                to="homepage"
                style={{ textDecoration: "none", color: mode.mode ? "#000000DE" : "white" }}
              >

                <ListItemText primary="Homepage" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <NavLink
                to="groups"
                style={{ textDecoration: "none", color: mode.mode ? "#000000DE" : "white" }}
              >
                <ListItemText primary="Groups" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <NavLink
                to="marketplace"
                style={{ textDecoration: "none", color: mode.mode ? "#000000DE" : "white" }}
              >
                <ListItemText primary="Marketplace" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <NavLink
                to="settings"
                style={{ textDecoration: "none", color: mode.mode ? "#000000DE" : "white" }}
              >
                <ListItemText primary="Settings" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <AccountBox color="action"/>
              </ListItemIcon>
              <NavLink
                to="profile"
                style={{ textDecoration: "none", color: mode.mode ? "#000000DE" : "white" }}
              >
                <ListItemText primary="Profile" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          {/* <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                {mode.mode ? <LightModeIcon/> : <DarkModeIcon />}
              </ListItemIcon>
              <ListItemText primary={mode.mode ? "Dark Mode" : "Light Mode"} />
              <FormControlLabel
                value="start"
                control={<Switch color="primary" />}
                labelPlacement="start"
                onClick={() => {
                  console.log(mode)
                  // dispatch(toggleDarkMode())
                }
                }
              />

            </ListItemButton>
          </ListItem> */}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box >
  );
}
