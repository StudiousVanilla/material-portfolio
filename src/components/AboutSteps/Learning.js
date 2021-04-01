import clsx from 'clsx'
import { Box, Container, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import learningPython from './AboutStepsImgs/learningPython.png'
import learningDCU from './AboutStepsImgs/learningDCU.png'
import learningTOP from './AboutStepsImgs/learningTOP.svg'

const useStyles = makeStyles((theme)=>({
    container:{
        width: '70%',
        minHeight: 730,
        padding: 10,
        color: '#fefefe',
    },
    gridText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    typography:{
        padding: '0px 20px 0px 20px',
        marginBottom: 0,
        fontSize: '1.2em'
    },
    span:{
        fontFamily: 'monospace',
        fontSize: '1.3em',
    },
    imgContainer:{
        height: 200,
    },
    imgContainerBig:{
        height: 225,
    },
    img:{
        width: '100%',
        height: '100%',
        filter: `drop-shadow( 1px 1px 10px black);`
    },
    tertiary:{
        color: theme.palette.info.main
    }
}))


const Learning = () => {

    const classes = useStyles()

    return ( 
        <Container className={classes.container}>
            <Grid container>
                <Grid item className={classes.gridText}
                  xs={12} s ={12} m={9} lg ={9}>
                    <Typography className={classes.typography}>
                        My <span className={classes.span}>"Hello, World"</span> was in 2018, with the excellent <Link href="https://nostarch.com/pythoncrashcourse2e" target="_blank" rel="noreferrer" className={classes.tertiary}>
                            Python Crash Course.
                        </Link>
                        <br/>
                        <br/>
                        This was my first foray into the world of programming, and I devoured the book. Reading it during my lunch breaks, practicing in the evenings and building little programs on the weekends. I was hooked.
                        <br/>
                        <br/>
                        And while I don't use Python very often anymore, I highly recommend this book to anyone who whats to peak behind the curtain, but doesn't know where to start.
                    </Typography>
                </Grid>
                <Grid item xs ={6} s={12} m={3} lg={3} className={classes.gridText}>
                    <Box className={clsx(classes.imgContainer, classes.imgContainerBig)}>
                        <img src={learningPython} alt="Python Crash Course" 
                        className={classes.img}/>
                    </Box>
                </Grid>
                <Grid item xs ={6} s={12} m={3} lg={3} className={classes.gridText}>
                    <Box className={clsx(classes.imgContainer, classes.imgContainerBig)}>
                        <img src={learningDCU} alt="DCU" 
                        className={classes.img}/>
                    </Box>
                </Grid>
                <Grid item className={classes.gridText}
                  xs={12} s ={12} m={9} lg ={9}>
                    <Typography className={classes.typography}>
                        In 2019 I enrolled in Dublin City University to complete a Certificate in Computer Programming <Link href="https://www.dcu.ie/registry/ccp-c-35" target="_blank" rel="noreferrer" className={classes.tertiary}> (CCP) </Link>
                        <br/>
                        <br/>
                        That course exposed to whole new worlds to greet hello. I dabbled with Java, greeted my old friend Python and began my first steps with HTML, CSS and Javascript.
                        <br/>
                        When I graduated in early 2020, I decided to focus on Web Development.
                    </Typography>
                </Grid>
                <Grid item className={classes.gridText}
                  xs={12} s ={12} m={9} lg ={9}>
                    <Typography className={classes.typography}>
                         After searching for different resources, courses and books I came across something that was exactly what I was looking for: <Link href="https://www.theodinproject.com/" target="_blank" rel="noreferrer" className={classes.tertiary}>
                            The Odin Project
                            </Link>
                        <br/>
                        <br/>
                        A curated collection of articles, videos, courses and projects which covers everything you need to know to be a Web Developer. It's self-taught, self-motivated and exactly what I was looking for.
                        <br/>
                        I started the course in May 2020, finished it in Januray 2021.
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