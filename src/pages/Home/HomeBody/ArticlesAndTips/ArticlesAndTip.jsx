import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

const ListArticleAndTip = [
  {
    keyId: "1",
    imageUrl:
      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg",
    title: "Memorial Day to Someone Told Me to Travel",
    subTitle:
      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
    time: "December 10, 2016",
  },
  {
    keyId: "2",
    imageUrl:
      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg",
    title: "7 Tips For Nomads On A Budget Trips",
    subTitle:
      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
    time: "December 10, 2016",
  },
  {
    keyId: "3",
    imageUrl:
      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg",
    title: "Taking A Travel Blog Victory Lap",
    subTitle:
      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
    time: "December 10, 2016",
  },
]
function ArticlesAndTip() {
  return (
    <Box className="PopularDes-Container">
      <Box className="PopularDes-Contain-Title">
        <Typography variant="h2">Articles & Tips</Typography>
      </Box>
      <Box className="PopularDes-Contain-SubTitle">
        <Typography variant="h5">
          Explore some of the best tips from around the world
        </Typography>
      </Box>
      <Box>
        <Grid className="Article-Tip" container spacing={2}>
          {ListArticleAndTip.map((itemIndex) => (
            <Grid
              className="Article-Tip-Item"
              item={true}
              key={itemIndex.keyId}
              xs={4}
            >
              <Card>
                <CardMedia
                  component="img"
                  image={`${itemIndex.imageUrl}`}
                  height="70%"
                ></CardMedia>
                <CardContent className="Article-Tip-Main">
                  <Typography className="Article-Tip-Time">
                    {itemIndex.time}
                  </Typography>
                  <Typography className="Article-Tip-Title" variant="h4">
                    {itemIndex.title}
                  </Typography>
                  <Typography className="Article-Tip-SubTitle">
                    {itemIndex.subTitle}
                  </Typography>
                </CardContent>
                <CardContent className="Article-Tip-ReadMore">
                  <Box className="Article-Tip-Value">Read More</Box>
                  <Box className="Article-Tip-Icon">
                    <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default ArticlesAndTip
