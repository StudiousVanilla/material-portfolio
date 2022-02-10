import { Box, Container, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import whoTCD from './AboutStepsImgs/whoTCD.svg'
import teaching from './AboutStepsImgs/teaching.svg'

const useStyles = makeStyles((theme)=>({
    container:{
        width: '70%',
        minHeight: 600,
        maxHeight: 650,
        padding: 10,
        color: '#fefefe',
        [theme.breakpoints.down('md')]: {
            width: '75%',
            minHeight: 500,
            maxHeight: 600,
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 50,
            width: '100%',
            height: 'fit-content',
            maxHeight: 750,
          },
    },
    typography:{
        padding: '10px 20px 10px 20px',
        fontSize: '1.2em',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.15em'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1em'
        }
    },
    imgContainer:{
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 10,
        [theme.breakpoints.down('sm')]: {
            height: 150,
          },
    },
    imgContainerBig:{
        height: 225
    },
    img:{
        width: '50%',
        maxWidth: 195,
        height: '100%',
        alignItems: 'center',
        filter: `drop-shadow( 1px 1px 10px black);`,
        [theme.breakpoints.down('sm')]: {
            maxWidth: 150,
          },
    },
    tertiary:{
        color: theme.palette.info.main
    }
}))


const WhoAmI = () => {

    const classes = useStyles()

    return ( 
        <Container className={classes.container}>
            <Grid container>
                <Grid item xs={12} s ={12} m={12} lg ={12}>
                    <Typography className={classes.typography}>
                        My name is Oisín Byrne. I'm 28. I live and work in Dublin, Ireland.
                        <br/>
                        <br/>
                        In 2015, I graduated from Trinity College Dublin with a bachelor's degree in Economics.
                        <br/>
                        <br/>
                        After University, I visited a lot of countries, lived in some of them, and had a few jobs along the way. I've worked as a digital marketing analyst, vineyard worker, librarian, bartender, recruiter, risk analyst for a hedge fund administrator and everything in between.
                    </Typography>
                </Grid>
                <Grid item xs ={6} s={6} m={6} lg={6}>
                    <Box className={classes.imgContainer}>
                        <img src={whoTCD} alt="Trinity College Dublin" 
                        className={classes.img}/>
                    </Box>
                </Grid>
                <Grid item xs ={6} s={6} m={6} lg={6}>
                    <Box className={classes.imgContainer}>
                        <img src={teaching} alt="Teaching" 
                        className={classes.img}/>
                    </Box>
                </Grid>
                <Grid item xs={12} s ={12} m={12} lg ={12}>
                    <Typography className={classes.typography}>
                        In 2018 I start working as an English teacher. It's a job I really enjoy and in January 2020 I moved to Spain to teach English and learn Spanish.
                        <br/>
                        <br/>
                        Turns out <Link 
                        href='https://www.worldometers.info/coronavirus/' target="_blank" rel="noreferrer" 
                        className={classes.tertiary}>
                            2020
                        </Link> wasn't a good year to relocate.
                        <br/>
                        <br/>
                        Unfortunately, I was forced to return to Ireland. Having found myself with a lot of freetime, I decided to work really hard on what had been just a hobby up to then: <b>Learning to code</b>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default WhoAmI;