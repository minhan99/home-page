/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import CancelIcon from '@mui/icons-material/Cancel'
import Box from '@mui/material/Box'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import Typography from '@mui/material/Typography'
import StarRateIcon from '@mui/icons-material/StarRate'
import StarOutlineIcon from '@mui/icons-material/StarOutline'

function DrawerSubMenu() {
  const imageURL1 = 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-131729-700x466.jpeg'
  const imageURL2 = 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630-700x466.jpeg'
  const [isOpenSubMenu, setIsOpenSubMenu] = React.useState(false)
  const openDrawerSubMenu = () => {
    setIsOpenSubMenu(true)
  }
  const closeDrawerSubMenu = () => {
    setIsOpenSubMenu(false)
  }
  return (
    <>
    <IconButton color="inherit" onClick={openDrawerSubMenu}>
      <MenuIcon className='SubHeader-Icon'></MenuIcon>  
    </IconButton>
    <Drawer
      anchor= 'right'
      open={isOpenSubMenu}
      onClose={closeDrawerSubMenu}
      className='Sub-Menu-Modal'
    >
      <List className='Sub-Menu-Body'>
      <ListItem>
            <ListItemButton>
                <ListItemIcon sx={{ marginLeft: '255px' }} className='Icon-Close-SubMenu'><CancelIcon onClick={closeDrawerSubMenu} sx={{ color: '#FF4A52' }} fontSize='large'></CancelIcon></ListItemIcon>
            </ListItemButton>
        </ListItem>
        <ListItem className='Item-Sub-Menu'>
            <ListItemButton>
                <ListItemText className='Text-Sub-Menu'>Home</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem className='Item-Sub-Menu'>
            <ListItemButton>
                <ListItemText className='Text-Sub-Menu'>Tours</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem className='Item-Sub-Menu'>
            <ListItemButton>
                <ListItemText className='Text-Sub-Menu'>Destinations</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem className='Item-Sub-Menu'>
            <ListItemButton>
                <ListItemText className='Text-Sub-Menu'>Pages</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem className='Item-Sub-Menu'>
            <ListItemButton>
                <ListItemText className='Text-Sub-Menu'>Blog</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem className='Item-Sub-Menu'>
            <ListItemButton>
                <ListItemText className='Text-Sub-Menu'>Shortcodes</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem className='Item-Sub-Menu'>
            <ListItemButton>
                <ListItemText className='Text-Sub-Menu'>Shop</ListItemText>
            </ListItemButton>
        </ListItem>
        <Box sx={{ marginTop: '75px', bgcolor: 'rgba(255,255,255,.85)' }}>
            <Box className='Img-Sub-Menu' style={{ backgroundImage: `url(${imageURL1})` }}>
                <Box className='Img-Sub-Menu-Price'>
                    <Box sx={{ padding: '0 10px 0 10px' }}>
                        <Box component="span">
                        </Box>$3,900
                    </Box>
                </Box>
                <Typography variant='h5' className='Img-Sub-Menu-Name'>Swiss Alps Trip</Typography>
                <Box className='Img-Sub-Menu-Rate'>
                    <StarRateIcon></StarRateIcon>
                    <StarRateIcon></StarRateIcon>
                    <StarRateIcon></StarRateIcon>
                    <StarRateIcon></StarRateIcon>
                    <StarOutlineIcon></StarOutlineIcon>
                </Box>
            </Box>
            <Box className='Img-Sub-Menu' style={{ backgroundImage: `url(${imageURL2})` }}>
            <Box className='Img-Sub-Menu-Price'>
                    <Box sx={{ padding: '0 10px 0 10px' }}>
                        <Box component="span">
                            $4,900
                        </Box>$4,200
                    </Box>
                </Box>
                <Typography className='Img-Sub-Menu-Name' variant='h5'>5 Lake of Fuji San</Typography>
                <Box className='Img-Sub-Menu-Rate'>
                    <StarRateIcon></StarRateIcon>
                    <StarRateIcon></StarRateIcon>
                    <StarRateIcon></StarRateIcon>
                    <StarRateIcon></StarRateIcon>
                    <StarOutlineIcon></StarOutlineIcon>
                </Box>
            </Box>
        </Box>
        <Box className='Icon-Sub-Menu'>
            <FacebookIcon></FacebookIcon>
            <TwitterIcon sx={{ marginLeft: '15px' }}></TwitterIcon>
            <YouTubeIcon sx={{ marginLeft: '15px' }}></YouTubeIcon>
            <PinterestIcon sx={{ marginLeft: '15px' }}></PinterestIcon>
            <InstagramIcon sx={{ marginLeft: '15px' }}></InstagramIcon>
        </Box>
      </List>
    </Drawer>
    </>
  )
}

export default DrawerSubMenu