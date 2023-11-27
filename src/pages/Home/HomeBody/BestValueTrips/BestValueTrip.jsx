import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"
import StarRateIcon from "@mui/icons-material/StarRate"
import StarOutlineIcon from "@mui/icons-material/StarOutline"
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder"

const listValueTrip = [
  {
    keyId: "1",
    imageUrl:
      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg",
    title: "French Autumn",
    subTitle: "City Tours, Urban",
    price: "$5,000",
    salePrice: "$5,000",
    isSale: false,
    time : "5 days",
    review : "4 reviews"
  },
  {
    keyId: "2",
    imageUrl:
      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg",
    title: "Grand Switzerland",
    subTitle: "Shopping, Mountain, Snow & Ice",
    price: "$6,000",
    salePrice: "$6,000",
    isSale: false,
    time: "6 days",
    review : "4 reviews"
  },
  {
    keyId: "3",
    imageUrl:
      "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg",
    title: "Discover Japan",
    subTitle: "City Tours, Iconic",
    price: "$3,000",
    salePrice: "$2,500",
    isSale: true,
    time: "5 days",
    review : "4 reviews"
  },
]

function BestValueTrip() {
  //   const renderPrice = (item) => {
  //     console.log("render", item)
  //     if (item.isSale) {
  //       return (
  //         <Box key={item.keyId} sx={{ padding: "0 10px 0 10px" }}>
  //           <Box component="span">{item.price}</Box> {item.salePrice}
  //         </Box>
  //       )
  //     } else {
  //       return (
  //         <Box key={item.keyId} sx={{ padding: "0 10px 0 10px" }}>
  //           <Box component="span"></Box> {item.salePrice}
  //         </Box>
  //       )
  //     }
  //   }
  return (
    <Box className="PopularDes-Container">
      <Box className="PopularDes-Contain-Title">
        <Typography variant="h2">Best Value Trip</Typography>
      </Box>
      <Box className="PopularDes-Contain-SubTitle">
        <Typography variant="h5">Best offers trips from us</Typography>
      </Box>
      <Box>
        <Grid className="Best-Value-Trip" container spacing={2}>
          {listValueTrip.map((itemIndex) => (
            <Grid
              className="Best-Value-Trip-Item"
              item={true}
              key={itemIndex.keyId}
              xs={4}
            >
              {itemIndex.isSale === true && (
                <Box>
                  <Box className="Best-Value-Trip-Price">
                    <Box sx={{ padding: "0 10px 0 10px" }}>
                      <Box component="span">{itemIndex.price}</Box>
                      {itemIndex.salePrice}
                    </Box>
                  </Box>
                  <Box className="Best-Value-Trip-Price-Sale">Sale</Box>
                </Box>
              )}
              {itemIndex.isSale === false && (
                <Box>
                  <Box className="Best-Value-Trip-Price">
                    <Box sx={{ padding: "0 10px 0 10px" }}>
                      <Box component="span"></Box>
                      {itemIndex.salePrice}
                    </Box>
                  </Box>
                  <Box></Box>
                </Box>
              )}
              <Card className="Best-Value-Trip-Card">
                <CardMedia
                  component="img"
                  image={`${itemIndex.imageUrl}`}
                  height="80%"
                ></CardMedia>
                <CardContent>
                  <Typography className="Best-Value-Trip-Title" variant="h4">
                    {itemIndex.title}
                  </Typography>
                  <Typography className="Best-Value-Trip-SubTitle">
                    {itemIndex.subTitle}
                  </Typography>
                </CardContent>
                <CardContent className="Best-Value-Trip-Rate">
                  <Box className="Best-Value-Trip-RateItem">
                    <Box className="Best-Value-Trip-Icon">
                      <StarRateIcon></StarRateIcon>
                      <StarRateIcon></StarRateIcon>
                      <StarRateIcon></StarRateIcon>
                      <StarRateIcon></StarRateIcon>
                      <StarOutlineIcon></StarOutlineIcon>
                    </Box>
                    <Box className="Best-Value-Trip-Review">
                      <Typography>{itemIndex.review}</Typography>
                    </Box>
                    <Box className="Best-Value-Trip-TimeValue">
                      <QueryBuilderIcon></QueryBuilderIcon>
                      <Typography>{itemIndex.time}</Typography>
                    </Box>
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

export default BestValueTrip
