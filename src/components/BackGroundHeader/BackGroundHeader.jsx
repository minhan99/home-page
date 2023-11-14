import Box from '@mui/material/Box'
import React from 'react'
import Header from '../Header/Header'
import CardMedia from '@mui/material/CardMedia'
import YouTube from 'react-youtube'

function BackGroundHeader() {
  const options = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };
  return (
    <Box>
      {/* Thanh menu header */}
      <Box>
        <Header></Header>
      </Box>
      {/* Khung search tìm kiếm trên header */}
      <Box></Box>
      {/* <CardMedia
        component='iframe'
        allowFullScreen= '1'
        allow='autoplay; encrypted-media'
        title='video'
      >

      </CardMedia> */}
      {/* <YouTube videoId='JPe2mwq96cw' options={options}></YouTube> */}
      </Box>
  )
}

export default BackGroundHeader