import Box from "@mui/material/Box";
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Divider from "@mui/material/Divider";

const imageFooter =
  "https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png";
const listImageFooter = [
  {
    keyId: "1",
    imageUrl: "https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg",
  },
  {
    keyId: "2",
    imageUrl: "https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg",
  },
  {
    keyId: "3",
    imageUrl: "https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg",
  },
  {
    keyId: "4",
    imageUrl: "https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg",
  },
  {
    keyId: "5",
    imageUrl: "https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg",
  },
  {
    keyId: "6",
    imageUrl: "https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg",
  },
];
function Footer() {
  return (
    <Box className="Footer">
      <Grid container spacing={2} className="Footer-Body">
        <Grid xs={4}>
          <Box className="Footer-Our-Awards">
            <Box className="Footer-Title">
              <Typography variant="h2">Our Awards</Typography>
            </Box>
            <Box className="Footer-SubTitle">
              <Typography>
                London is a megalopolis of people, ideas and frenetic energy.
                The capital and largest city of the United Kingdom.
              </Typography>
            </Box>
            <Box
              component={"img"}
              src={imageFooter}
              className="Footer-Our-Awards-Image"
            ></Box>
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box className="Footer-Contact-Info">
            <Box className="Footer-Title">
              <Typography variant="h2">Contact Info</Typography>
            </Box>
            <Box className="Footer-SubTitle">
              <Typography>
                <PhoneIphoneIcon></PhoneIphoneIcon>
                1-567-124-44227
              </Typography>
            </Box>
            <Box className="Footer-SubTitle">
              <Typography>
                <LocationOnIcon></LocationOnIcon>
                184 Main Street East Perl Habour 8007
              </Typography>
            </Box>
            <Box className="Footer-SubTitle">
              <Typography>
                <AccessAlarmIcon></AccessAlarmIcon>
                Mon - Sat 8.00 - 18.00 Sunday CLOSED
              </Typography>
            </Box>
            <Box className="Footer-Contact-Info-Social">
              <FacebookRoundedIcon
                sx={{ bgcolor: "#2D5F9A" }}
              ></FacebookRoundedIcon>
              <TwitterIcon sx={{ bgcolor: "#00C3F3" }}></TwitterIcon>
              <YouTubeIcon sx={{ bgcolor: "#cc181e" }}></YouTubeIcon>
              <PinterestIcon sx={{ bgcolor: "#bd081c" }}></PinterestIcon>
              <InstagramIcon sx={{ bgcolor: "#405de6" }}></InstagramIcon>
            </Box>
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box className="Footer-Our-RecentTrip">
            <Box className="Footer-Title">
              <Typography variant="h2">Recent Trips</Typography>
            </Box>
            <ImageList
              sx={{ width: 500, height: 450 }}
              cols={3}
              rowHeight={164}
              gap={10}
              className="Footer-Our-RecentTrip-Image"
            >
              {listImageFooter.map((itemIndex) => (
                <ImageListItem
                  className="Footer-Our-RecentTrip-Image-Item"
                  key={itemIndex.keyId}
                >
                  <img
                    className="image"
                    src={itemIndex.imageUrl}
                    alt="hinh"
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Grid>
      </Grid>
      <Divider
        sx={{
          bgcolor: "#dce0e0",
          borderStyle: "inset",
          borderBottom: "0.1em",
          borderWidth: "thin",
          margin: "0px 50px 0px 50px !important",
        }}
      ></Divider>
      <Box className="Footer-Help">
        <Box className="Footer-Create-By-Name">
          <Typography>
          © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
          </Typography>
        </Box>
        <Box className="Footer-Menu">
          <Typography>Home</Typography>
          <Typography>Tours</Typography>
          <Typography>Blog</Typography>
          <Typography>Purchase Theme</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
