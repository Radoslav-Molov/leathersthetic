import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";

const pages = [
  "Home",
  "Collection",
  "How its made",
  "Meet the maker",
  "Contact",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"]; // cart

function NavigationBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [headerScrolled, setHeaderScrolled] = React.useState<boolean>(false);
  const [windowWidth, setWindowWidth] = React.useState<boolean>(false);

  window.onscroll = function () {
    if (window.scrollY > 120) {
      setHeaderScrolled(true);
    } else {
      setHeaderScrolled(false);
    }
  };

  window.onresize = function () {
    if (window.innerWidth < 900) {
      setWindowWidth(true);
    } else {
      setWindowWidth(false);
    }
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div
      id={
        headerScrolled
          ? windowWidth
            ? "navbar responsive"
            : "navbar"
          : windowWidth
          ? "navbar_transparent responsive"
          : "navbar_transparent"
      }
    >
      <Toolbar className='nav_toolbar'>
        <Box
          className='navbar_items'
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
          {pages.map((page) => (
            <Button
              className='each_nav_item'
              key={page}
              sx={{ my: 0.7, mx: 2.5, color: "black", display: "block" }}
            >
              {page}
            </Button>
          ))}
          <Button className='menu'>
            <img src='menu.png' className='menu_icon' alt='' />
          </Button>
        </Box>

        <img className='logo' src='logo.webp' alt='Logo' />

        <Box className='cart_item' sx={{ flexGrow: 0 }}>
          <Tooltip title='Open Cart Items'>
            <Button
              key='Cart'
              className='each_nav_item'
              sx={{ my: 2, color: "black", display: "block" }}
              onClick={handleOpenUserMenu}
            >
              Cart (0)
            </Button>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign='center'>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </div>
  );
}
export default NavigationBar;
