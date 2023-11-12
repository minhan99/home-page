import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Divider from '@mui/material/Divider'

function ShortCodeMenu() {
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
          id="basic-button-shortcodemenu"
          aria-controls={open ? 'basic-menu-shortcodemenu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onMouseEnter={handleMouseOver}
          endIcon={<ExpandMoreIcon></ExpandMoreIcon>}
        >
          Shortcodes
        </Button>
        <Menu
          id="basic-menu-shortcodemenu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'basic-button-shortcodemenu',
            onMouseLeave: handleClose
          }}
          className='List-Menu'
        >
          <MenuItem>
            <ListItemText className='Text-Menu'>Accordion & Toggles</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Alert Boxes</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Animated Content</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Buttons & Social Icons</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Columns</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Google Maps</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Image Frame & Animation</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Image Teasers</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Pricing Tables</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Tabs</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    )
}

export default ShortCodeMenu