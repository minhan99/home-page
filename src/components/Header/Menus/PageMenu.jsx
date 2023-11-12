import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Divider from '@mui/material/Divider'

function PageMenu() {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleMouseOver = (event) => {
      setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }
    return (
      <Box>
        <Button
          className='Button-Menu'
          id="basic-button-pagemenu"
          aria-controls={open ? 'basic-menu-pagemenu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onMouseEnter={handleMouseOver}
          endIcon={<ExpandMoreIcon></ExpandMoreIcon>}
        >
          Pages
        </Button>
        <Menu
          id="basic-menu-pagemenu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'basic-button-pagemenu',
            onMouseLeave: handleClose
          }}
          className='List-Menu'
        >
          <MenuItem>
            <ListItemText className='Text-Menu'>About Us</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Contact Us</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>FAQs</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Gallery</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Page Fullwidth</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Page + Video Background Header</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Page Right Sidebar</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Page Left Sidebar</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    )
}

export default PageMenu