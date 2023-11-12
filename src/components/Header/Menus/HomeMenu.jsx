import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Divider from '@mui/material/Divider'

function HomeMenu() {
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
          id="basic-button-homemenu"
          aria-controls={open ? 'basic-menu-homemenu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onMouseEnter={handleMouseOver}
          endIcon={<ExpandMoreIcon></ExpandMoreIcon>}
        >
          Home
        </Button>
        <Menu
          id="basic-menu-homemenu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'basic-button-homemenu',
            onMouseLeave: handleClose
          }}
          className='List-Menu'
        >
          <MenuItem>
            <ListItemText className='Text-Menu'>Home 1 – Background Image</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Home 2 – Youtube Video</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Home 3 – Google Inspired</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Home 4 – Travel Site</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    )
}

export default HomeMenu