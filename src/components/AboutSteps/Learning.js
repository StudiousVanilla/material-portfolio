import clsx from 'clsx'
import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import learningPython from './AboutStepsImgs/learningPython.png'
import learningDCU from './AboutStepsImgs/learningDCU.png'
import learningTOP from './AboutStepsImgs/learningTOP.svg'

const useStyles = makeStyles((theme)=>({
    container:{
        width: '70%',
        minHeight: 710,
        padding: 15,
        color: '#fefefe',
    },
    gridText: {
        display: 'flex',
        alignItems: 'center'
    },
    typography:{
        padding: 30
    },
    imgContainer:{
        height: 200,
        marginBottom: 10,
    },
    imgContainerBig:{
        height: 225,
    },
    img:{
        width: '100%',
        height: '100%',
        filter: `drop-shadow( 1px 1px 10px black);`
    }
}))


const Learning = () => {

    const classes = useStyles()

    return ( 
        <Container className={classes.container}>
            <Grid container>
                <Grid className={classes.gridText}
                 item xs={12} s ={12} m={9} lg ={9}>
                    <Typography className={classes.typography}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus inventore dolorem molestias officiis eaque, cum ex excepturi adipisci, aperiam quae reprehenderit quo dolorum a sit consequatur! Magni, tempora molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est temporibus hic quam, eligendi explicabo neque iste harum quas nulla eaque praesentium porro maiores unde earum ipsam rerum adipisci cum culpa.
                    </Typography>
                </Grid>
                <Grid item xs ={6} s={12} m={3} lg={3}>
                    <Box className={clsx(classes.imgContainer, classes.imgContainerBig)}>
                        <img src={learningPython} alt="Python Crash Course" 
                        className={classes.img}/>
                    </Box>
                </Grid>
                <Grid item xs ={6} s={12} m={3} lg={3}>
                    <Box className={clsx(classes.imgContainer, classes.imgContainerBig)}>
                        <img src={learningDCU} alt="DCU" 
                        className={classes.img}/>
                    </Box>
                </Grid>
                <Grid className={classes.gridText}
                 item xs={12} s ={12} m={9} lg ={9}>
                    <Typography className={classes.typography}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus inventore dolorem molestias officiis eaque, cum ex excepturi adipisci, aperiam quae reprehenderit quo dolorum a sit consequatur! Magni, tempora molestiae.
                    </Typography>
                </Grid>
                <Grid className={classes.gridText}
                 item xs={12} s ={12} m={9} lg ={9}>
                    <Typography className={classes.typography}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus inventore dolorem molestias officiis eaque, cum ex excepturi adipisci, aperiam quae reprehenderit quo dolorum a sit consequatur! Magni, tempora molestiae.
                    </Typography>
                </Grid>
                <Grid item xs ={6} s={12} m={3} lg={3}>
                    <Box className={classes.imgContainer}>
                        <img src={learningTOP} alt="The Odin Project" 
                        className={classes.img}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default Learning;