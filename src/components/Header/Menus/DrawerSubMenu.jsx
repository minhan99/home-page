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

function DrawerSubMenu() {
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
                <ListItemIcon sx={{ marginLeft: '255px' }} className='Icon-Close-SubMenu'><CancelIcon sx={{ color: '#FF4A52' }} fontSize='large'></CancelIcon></ListItemIcon>
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
      </List>
    </Drawer>
    </>
  )
}

export default DrawerSubMenu