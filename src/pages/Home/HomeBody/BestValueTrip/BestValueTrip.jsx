import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'

const listValueTrip = [
    {
        keyId : '1',
        imageUrl : 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg',
        title : 'French Autumn',
        subTitle : 'City Tours, Urban',
        isSale : '0'
    },
    {
        keyId : '2',
        imageUrl : 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg',
        title : 'Grand Switzerland',
        subTitle : 'Shopping, Mountain, Snow & Ice',
        isSale : '0'
    },
    {
        keyId : '3',
        imageUrl : 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg',
        title : 'Discover Japan',
        subTitle : 'City Tours, Iconic',
        isSale : '1'
    }
 ]

function BestValueTrip() {
  return (
    <Box className = 'PopularDes-Container'>
        <Box className = 'PopularDes-Contain-Title'>
            <Typography variant='h2'>
                Best Value Trip
            </Typography>
        </Box>
        <Box className= 'PopularDes-Contain-SubTitle'>
            <Typography variant='h5'>
                Best offers trips from us
            </Typography>
        </Box>
        {/* <Grid container spacing={2}>
            {
                listValueTrip.map((itemIndex) => (
                    <Grid xs={3} key={itemIndex.keyId} item={true}>
                        <Card>
                            <CardMedia image={itemIndex.imageUrl}>
                            </CardMedia>
                            <CardContent>
                                <Typography variant='h4'>{itemIndex.title}</Typography>
                                <Typography>{itemIndex.subTitle}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))            
            }

        </Grid> */}
        <Card>
            <CardMedia image={listValueTrip[0].imageUrl}></CardMedia>
        </Card>
    </Box>
  )
}

export default BestValueTrip