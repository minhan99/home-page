import Box from '@mui/material/Box'
import React from 'react'
import Header from '../Header/Header'
import CardMedia from '@mui/material/CardMedia'

function BackGroundHeader() {
  return (
    <Box>
      {/* Thanh menu header */}
      <Box>
        <Header></Header>
      </Box>
      {/* Khung search tìm kiếm trên header */}
      <Box></Box>
      <CardMedia
        component='iframe'
        image='https://www.youtube.com/watch?v=JPe2mwq96cw' 
      >

      </CardMedia>
    </Box>
  )
}

export default BackGroundHeader