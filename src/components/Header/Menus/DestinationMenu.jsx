import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Divider from '@mui/material/Divider'

function DestinationMenu() {
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
          id="basic-button-destinationmenu"
          aria-controls={open ? 'basic-menu-destinationmenu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onMouseEnter={handleMouseOver}
          endIcon={<ExpandMoreIcon></ExpandMoreIcon>}
        >
          Destinations
        </Button>
        <Menu
          id="basic-menu-destinationmenu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'basic-button-destinationmenu',
            onMouseLeave: handleClose
          }}
          className='List-Menu'
        >
          <MenuItem>
            <ListItemText className='Text-Menu'>Destination Fullwidth</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Destination + Video Header</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Destination Right Sidebar</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Destination Left Sidebar</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Single Destination</ListItemText>
          </MenuItem>
          <Divider></Divider>
          <MenuItem>
            <ListItemText className='Text-Menu'>Single Destination + Video</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    )
}

export default DestinationMenu