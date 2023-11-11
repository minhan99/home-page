import { Box } from '@mui/material'
import React from 'react'
import BackGroundHeader from '../../components/BackGroundHeader/BackGroundHeader'
import HomeBody from './HomeBody/HomeBody'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <Box>
        {/* Header của trang Home */}
        <BackGroundHeader></BackGroundHeader>
        {/* Body của trang Home */}
        <HomeBody></HomeBody>
        {/* Footer của trang Home */}
        <Footer></Footer>
    </Box>
  )
}

export default Home