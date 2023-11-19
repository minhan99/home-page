import { Box } from '@mui/material'
import React from 'react'
import PopularDestination from './PopularDestination/PopularDestination'
import BestValueTrip from './BestValueTrip/BestValueTrip'

function HomeBody() {
  return (
    <Box>
        {/* Popular Destinations Area */}
        <PopularDestination></PopularDestination>
        {/* Best Value Trip */}
        <BestValueTrip></BestValueTrip>
        {/* Why Choose Us */}
        {/* Articles And Tip */}
    </Box>
  )
}

export default HomeBody