import { Box } from "@mui/material"
import React from "react"
import PopularDestination from "./PopularDestinations/PopularDestination"
import BestValueTrip from "./BestValueTrips/BestValueTrip"
import WhyChooseUs from "./WhyChooseUss/WhyChooseUs"
import ArticlesAndTip from "./ArticlesAndTips/ArticlesAndTip"

function HomeBody() {
  return (
    <Box>
      {/* Popular Destinations Area */}
      <PopularDestination></PopularDestination>
      {/* Best Value Trip */}
      <BestValueTrip></BestValueTrip>
      {/* Why Choose Us */}
      <WhyChooseUs></WhyChooseUs>
      {/* Articles And Tip */}
      <ArticlesAndTip></ArticlesAndTip>
    </Box>
  )
}

export default HomeBody
