import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Grid from "@mui/material/Grid"

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
        <Grid container spacing={2}>
          {listValueTrip.map((itemIndex) => (
            <Grid item={true} key={itemIndex.keyId} xs={3}>
              {console.log("Grid :", itemIndex)}
              <Box className="Img-Sub-Menu-Price">
                {itemIndex.isSale === true && (
                  <Box sx={{ padding: "0 10px 0 10px" }}>
                    <Box component="span">{itemIndex.price}</Box>
                    {itemIndex.salePrice}
                  </Box>
                )}
                {itemIndex.isSale === false && (
                  <Box sx={{ padding: "0 10px 0 10px" }}>
                    <Box component="span"></Box>
                    {itemIndex.salePrice}
                  </Box>
                )}
              </Box>
              <Card>
                {console.log("card :", itemIndex)}
                <CardMedia
                  component="img"
                  image={`${itemIndex.imageUrl}`}
                ></CardMedia>
                <CardContent>
                  <Typography variant="h4">{itemIndex.title}</Typography>
                  <Typography>{itemIndex.subTitle}</Typography>
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
