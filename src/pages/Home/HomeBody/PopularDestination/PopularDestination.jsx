/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

const listImage = [
  {
    keyId: "1",
    imageUrl:
      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg",
    title: "Tokyo",
  },
  {
    keyId: "2",
    imageUrl:
      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg",
    title: "Seoul",
  },
  {
    keyId: "3",
    imageUrl:
      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg",
    title: "Paris",
  },
  {
    keyId: "4",
    imageUrl:
      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg",
    title: "London",
  },
]

function PopularDestination() {
  return (
    <Box className="PopularDes-Container">
      <Box className="PopularDes-Contain-Title">
        <Typography variant="h2">Popular Destinations</Typography>
      </Box>
      <Box className="PopularDes-Contain-SubTitle">
        <Typography variant="h5">World's best tourist destinations</Typography>
      </Box>
      {/* <ImageList cols={4}>
                {
                    listImage.map((item) => (
                        <ImageListItem className='PopularDes-ListImage-Item' key={item.keyId}>
                            <img
                                src={`${item.imageUrl}`}
                            >
                            </img>
                            <Typography variant='h3' className='PopularDes-ListImage-Title'>{item.title}</Typography>
                        </ImageListItem>
                    ))
                }
            </ImageList> */}
      <Grid container spacing={2} className="PopularDes-ListImage">
        {listImage.map((item) => (
          <Grid className="PopularDes-ListImage-Item" xs={3}>
            <Box
              component={"div"}
              sx={{ backgroundImage: `url(${item.imageUrl})` }}
              className="PopularDes-ListImage-Image"
            >
              <Typography variant="h3" className="PopularDes-ListImage-Title">
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PopularDestination
