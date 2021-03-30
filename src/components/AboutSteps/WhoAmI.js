import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import whoTCD from './AboutStepsImgs/whoTCD.svg'
import test from './AboutStepsImgs/test.svg'

const useStyles = makeStyles((theme)=>({
    container:{
        width: '70%',
        padding: 30,
        color: '#fefefe'
    },
    typography:{
        padding: 30
    },
    imgContainer:{
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 30,
    },
    imgContainerBig:{
        height: 225
    },
    img:{
        width: '50%',
        height: '100%',
        alignItems: 'center',
        filter: `drop-shadow( 1px 1px 10px black);`,
    }
}))


const WhoAmI = () => {

    const classes = useStyles()

    return ( 
        <Container className={classes.container}>
            <Grid container>
                <Grid item xs={12} s ={12} m={12} lg ={12}>
                    <Typography className={classes.typography}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus inventore dolorem molestias officiis eaque, cum ex excepturi adipisci, aperiam quae reprehenderit quo dolorum a sit consequatur! Magni, tempora molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est temporibus hic quam, eligendi explicabo neque iste harum quas nulla eaque praesentium porro maiores unde earum ipsam rerum adipisci cum culpa.
                    </Typography>
                </Grid>
                <Grid item xs ={6} s={6} m={6} lg={6}>
                    <Box className={classes.imgContainer}>
                        <img src={whoTCD} alt="DCU" 
                        className={classes.img}/>
                    </Box>
                </Grid>
                <Grid item xs ={6} s={6} m={6} lg={6}>
                    <Box className={classes.imgContainer}>
                        <img src={test} alt="DCU" 
                        className={classes.img}/>
                    </Box>
                </Grid>
                <Grid item xs={12} s ={12} m={12} lg ={12}>
                    <Typography className={classes.typography}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus inventore dolorem molestias officiis eaque, cum ex excepturi adipisci, aperiam quae reprehenderit quo dolorum a sit consequatur! Magni, tempora molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti perspiciatis animi eligendi aspernatur quaerat iste ad temporibus libero eaque! Eligendi vero odio sequi voluptas repudiandae dolorum praesentium quia corrupti asperiores.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default WhoAmI;