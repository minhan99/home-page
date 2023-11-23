import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"

const imageBottom = 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg'
const listWhyChooseUs = [
    {
      keyId: "1",
      imageUrl:
        "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png",
      title: "Handpicked Hotels",
      subTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
    },
    {
      keyId: "2",
      imageUrl:
        "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png",
      title: "World Class Service",
      subTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
    },
    {
      keyId: "3",
      imageUrl:
        "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png",
      title: "Best Price Guarantee",
      subTitle: "Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
    },
  ]
function WhyChooseUs() {
  return (
    <Box className="PopularDes-Container">
      <Box className="PopularDes-Contain-Title">
        <Typography variant="h2">Why Choose Us</Typography>
      </Box>
      <Box className="PopularDes-Contain-SubTitle">
        <Typography variant="h5">Here are reasons you should plan trip with us</Typography>
      </Box>
      <Box>
        <Grid className="Why-Choose-Us" container spacing={2}>
          {listWhyChooseUs.map((itemIndex) => (
            <Grid
              className="Why-Choose-Us-Item"
              item={true}
              key={itemIndex.keyId}
              xs={4}
            >
              <Card className="Why-Choose-Us-Card">
                <CardMedia
                  component="img"
                  image={`${itemIndex.imageUrl}`}
                  height="80%"
                  className="Why-Choose-Us-Img"
                ></CardMedia>
                <CardContent className="Why-Choose-Us-Content">
                  <Typography className="Why-Choose-Us-Title" variant="h4">
                    {itemIndex.title}
                  </Typography>
                  <Typography className="Why-Choose-Us-SubTitle">
                    {itemIndex.subTitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box 
            component={"div"} 
            sx={{
                backgroundImage: `url(${imageBottom})`
            }}
            className="Why-Choose-Us-ImageBottom"
        >
        </Box>
      </Box>
    </Box>
  )
}

export default WhyChooseUs