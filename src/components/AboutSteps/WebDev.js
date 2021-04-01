import clsx from 'clsx'
import { Box, Container, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import tsbNavy from './AboutStepsImgs/tsbNavy.svg'


const useStyles = makeStyles((theme)=>({
    container:{
        width: '70%',
        minHeight: 730,
        padding: 15,
        color: '#fefefe',
    },
    typography:{
        padding: 30,
        marginBottom: 0,
        fontSize: '1.3em'
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
                        Since completing 'The Odin Project' I've been trying to learn even more. I have dozens and dozens of project repos on my <Link href="https://github.com/StudiousVanilla" target="_blank" rel="noreferrer" className={classes.tertiary}> GitHub </Link>. Some I'm very proud. Others are a little embarressing to look back on now, but that's part of mastering a skill. If you go and poke around my Github profile you can actually see the improvement over time. All this practice paid off though, as I've gotten my first couple of freelance opportunities. Learn a little about them below.
                    </Typography>
                </Grid>
                <Grid item xs ={6} s={12} m={2} lg={3}>
                    <Box className={classes.tsbContainer}>
                        <img src={tsbNavy} alt="The Sounding Board" 
                        className={classes.img}/>
                    </Box>
                </Grid>
                <Grid item xs={12} s ={12} m={9} lg ={9}>
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
                <Grid item xs={12} s ={12} m={9} lg ={9}>
                    <Typography className={classes.typography}>
                        The 404 is a newsletter that offers a monthly multi-media round up of internet news.
                        <br/>
                        They contacted me to help them build a website where they can host all their content in one place and help direct new users to sign-up.
                        <br/>
                        <br/>
                        <i style={{fontSize:'15px'}}>
                        The site is still in early development but a preview/live demo should be available soon.
                        </i>
                    </Typography>
                </Grid>
                <Grid item xs ={6} s={12} m={3} lg={3}>
                    <Box className={classes.tsbContainer}>
                        <img src={tsbNavy} alt="DCU" 
                        className={classes.img}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default WebDev;