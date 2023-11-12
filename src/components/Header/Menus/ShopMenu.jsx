import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Divider from '@mui/material/Divider'

function ShopMenu() {
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
          id="basic-button-shopmenu"
          aria-controls={open ? 'basic-menu-shopmenu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onMouseEnter={handleMouseOver}
          endIcon={<ExpandMoreIcon></ExpandMoreIcon>}
        >
          Shop
        </Button>
        <Menu
          id="basic-menu-shopmenu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'basic-button-shopmenu',
            onMouseLeave: handleClose
          }}
          className='List-Menu'
        >
          <MenuItem>
            <ListItemText className='Text-Menu'>Shop Fullwidth</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Shop Sidebar</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Single Product Fullwidth</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Single Product With Sidebar</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    )
}

export default ShopMenu