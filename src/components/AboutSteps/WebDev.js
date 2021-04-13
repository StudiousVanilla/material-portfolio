import { Box, Container, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import tsbLogo from './AboutStepsImgs/tsbLogo.svg'
import the404 from './AboutStepsImgs/the404.png'


const useStyles = makeStyles((theme)=>({
    container:{
        width: '65%',
        minWidth: 1000,
        minHeight: 600,
        maxHeight: 650,
        padding: 5,
        color: '#fefefe',
        [theme.breakpoints.down('md')]: {
            width: '80%',
            minHeight: 500,
            maxHeight: 600,
        },
    },
    typography:{
        padding: 22,
        marginBottom: 0,
        fontSize: '1.4em',
        [theme.breakpoints.down('md')]: {
            padding: 35,
            fontSize: '1.3em'
        },    
    },
    tsbContainer:{
        height: 190,
        width: 190,
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D274F',
        borderRadius: 1000,
        [theme.breakpoints.down('md')]: {
            height: 160,
            width: 160,
        },
    },
    gridItem:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fourContainer:{
        height: 190,
        width: 190,
         display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'rotate(8deg)',
        [theme.breakpoints.down('md')]: {
            height: 160,
            width: 160,
        },  
    },
    img:{
        width: '102%',
        height: '102%',
        [theme.breakpoints.down('md')]: {
            width: '105%',
            height: '105',
        },
    },
    tertiary:{
        color: theme.palette.info.main
    }
}))


const WebDev = () => {

    const classes = useStyles()

    return ( 
        <Container className={classes.container}>
            <Grid container>
                <Grid item xs={12} s ={12} m={12} lg ={12}>
                    <Typography className={classes.typography}>
                        Since completing 'The Odin Project' I've been trying to learn even more. I have dozens and dozens of project repos on my <Link href="https://github.com/StudiousVanilla" target="_blank" rel="noreferrer" className={classes.tertiary}> GitHub </Link>. I have also recently gotten my first couple of freelance opportunities. Learn a little about them below.
                    </Typography>
                </Grid>
                <Grid item xs ={3} s={3} m={3} lg={3} className={classes.gridItem}>
                    <Box className={classes.tsbContainer}>
                        <img src={tsbLogo} alt="The Sounding Board" 
                        className={classes.img}/>
                    </Box>
                </Grid>
                <Grid item xs={9} s ={9} m={9} lg ={9}>
                    <Typography className={classes.typography}>
                        <Link href="https://tsbcoaching.ie/" target="_blank" rel="noreferrer" className={classes.tertiary}> The Sounding Board </Link> is a coaching and mentoring service.
                        <br/>
                        <br/>
                        They contacted me to develop a new website after they had become frustrated with the restrictions imposed by website builders.
                        <br/>
                        <br/>
                        Working with a professional designer, I built and hosted the entire site, working to my clients specifications. The <Link href="#projects" color="secondary"> projects </Link> section has more technical details about the site.
                    </Typography>
                </Grid>
                <Grid item xs={9} s ={9} m={9} lg ={9}>
                    <Typography className={classes.typography}>
                        the404* is a newsletter that offers a monthly multi-media round up of internet news.
                        <br/>
                        <br/>
                        They contacted me to help them build a website where they can host all their content in one place and help direct new users to sign-up.
                        <br/>
                        <br/>
                        <i style={{fontSize:'16px'}}>
                        * The site is still in early development but a demo should be available soon
                        </i>
                    </Typography>
                </Grid>
                <Grid item xs ={3} s={3} m={3} lg={3} className={classes.gridItem}>
                    <Box className={classes.fourContainer}>
                        <img src={the404} alt="the404" 
                        className={classes.img}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default WebDev;