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
        allowFullScreen= '1'
        allow='autoplay; encrypted-media'
        title='video'
        src='https://www.youtube.com/embed/JPe2mwq96cw?autohide=1&rel=0&autoplay=1&playsinline=1&iv_load_policy=3&modestbranding=1&controls=0&showinfo=0&disablekb=1&enablejsapi=1&origin=https%3A%2F%2Fthemes.themegoods.com&widgetid=1'
      >

      </CardMedia>
      {/* <video src='https://www.youtube.com/embed/JPe2mwq96cw?autohide=1&rel=0&autoplay=0&playsinline=1&iv_load_policy=3&modestbranding=1&controls=0&showinfo=0&disablekb=1&enablejsapi=1&origin=https%3A%2F%2Fthemes.themegoods.com&widgetid=1'></video> */}
      </Box>
  )
}

export default BackGroundHeader