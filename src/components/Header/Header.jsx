import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import HomeMenu from './Menus/HomeMenu'
import TourMenu from './Menus/TourMenu/TourMenu'
import BookingMenu from './Menus/BookingMenu/BookingMenu'
import DestinationMenu from './Menus/DestinationMenu'
import PageMenu from './Menus/PageMenu'
import BlogMenu from './Menus/BlogMenu'
import ShortCodeMenu from './Menus/ShortCodeMenu'
import ShopMenu from './Menus/ShopMenu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import DrawerSubMenu from './Menus/DrawerSubMenu'

function Header() {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: 15, marginRight: 15 }} >
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
            {/* DrawerSubMenu show in here */}
            <DrawerSubMenu></DrawerSubMenu>
            <IconButton color='inherit'>
              <Badge badgeContent={0} color="error" showZero>
                <ShoppingCartIcon className='Shopping-Icon'></ShoppingCartIcon>
              </Badge>
            </IconButton>            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
