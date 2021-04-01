import clsx from 'clsx'
import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import tsbNavy from './AboutStepsImgs/tsbNavy.svg'


const useStyles = makeStyles((theme)=>({
    container:{
        width: '70%',
        minHeight: 730,
        padding: 15,
        color: '#fefefe',
    },
    typography:{
        padding: 30
    },
    tsbContainer:{
        height: 190,
        width: 190,
        marginBottom: 30,
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fefefe',
        borderRadius: 1000
    },
    img:{
        width: 192,
        height: 192,
    },
    four:{
        fontSize: 100
    }
}))


const WebDev = () => {

    const classes = useStyles()

    return ( 
        <Container className={classes.container}>
            <Grid container>
                <Grid item xs ={6} s={12} m={3} lg={3}>
                    <Box className={classes.tsbContainer}>
                        <img src={tsbNavy} alt="DCU" 
                        className={classes.img}/>
                    </Box>
                </Grid>
                <Grid item xs={12} s ={12} m={9} lg ={9}>
                    <Typography className={classes.typography}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus inventore dolorem molestias officiis eaque, cum ex excepturi adipisci, aperiam quae reprehenderit quo dolorum a sit consequatur! Magni, tempora molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est temporibus hic quam, eligendi explicabo neque iste harum quas nulla eaque praesentium porro maiores unde earum ipsam rerum adipisci cum culpa.
                    </Typography>
                </Grid>
                <Grid item xs={12} s ={12} m={9} lg ={9}>
                    <Typography className={classes.typography}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus inventore dolorem molestias officiis eaque, cum ex excepturi adipisci, aperiam quae reprehenderit quo dolorum a sit consequatur! Magni, tempora molestiae.
                    </Typography>
                </Grid>
                <Grid item xs ={6} s={12} m={3} lg={3}>
                    <Box className={classes.tsbContainer}>
                        <img src={tsbNavy} alt="DCU" 
                        className={classes.img}/>
                    </Box>
                </Grid>
                <Grid item xs ={6} s={12} m={3} lg={3}>
                    <Box className={classes.tsbContainer}>
                        <img src={tsbNavy} alt="DCU" 
                        className={classes.img}/>
                    </Box>
                </Grid>
                <Grid item xs={12} s ={12} m={9} lg ={9}>
                    <Typography className={classes.typography}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus inventore dolorem molestias officiis eaque, cum ex excepturi adipisci, aperiam quae reprehenderit quo dolorum a sit consequatur! Magni, tempora molestiae.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default WebDev;