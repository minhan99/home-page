import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

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
    >
      <List>
        <ListItem>
            <ListItemButton>
                <ListItemText>Home</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemText>Tours</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemText>Destinations</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemText>Pages</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemText>Blog</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemText>Home</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemText>Shortcodes</ListItemText>
            </ListItemButton>
        </ListItem>
        <ListItem>
            <ListItemButton>
                <ListItemText>Shop</ListItemText>
            </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
    </>
  )
}

export default DrawerSubMenu