import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
import HomeMenu from './Menus/HomeMenu'
import TourMenu from './Menus/TourMenu/TourMenu'
import BookingMenu from './Menus/BookingMenu/BookingMenu'
import DestinationMenu from './Menus/DestinationMenu'
import PageMenu from './Menus/PageMenu'
import BlogMenu from './Menus/BlogMenu'
import ShortCodeMenu from './Menus/ShortCodeMenu'
import ShopMenu from './Menus/ShopMenu'

function Header() {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: 15, marginRight: 15 }}>
      <AppBar position="static">
        <Toolbar sx={{ '&.MuiToolbar-root':{ paddingLeft: 0, paddingRight: 0 } }}>
          <Box
            component="img"
            sx={{
                height: 22,
                width: 92
            }}
            src= "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png"
          >
          </Box>
          <Box sx={{ flexGrow: 1, flexDirection: 'row-reverse', display: 'flex' }} >
            {/* Chứa menus */}
            <ShopMenu></ShopMenu>
            <ShortCodeMenu></ShortCodeMenu>
            <BlogMenu></BlogMenu>
            <PageMenu></PageMenu>
            <DestinationMenu></DestinationMenu>
            <BookingMenu></BookingMenu>
            <TourMenu></TourMenu>
            <HomeMenu></HomeMenu>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
