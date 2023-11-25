import { Box } from "@mui/material"
import React from "react"
import PopularDestination from "./PopularDestination/PopularDestination"
import BestValueTrip from "./BestValueTrip/BestValueTrip"
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs"
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
