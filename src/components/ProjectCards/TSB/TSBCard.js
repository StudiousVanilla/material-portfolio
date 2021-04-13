import { Box, Container, IconButton, makeStyles, Typography } from "@material-ui/core";
import clsx from 'clsx'
import RedoIcon from '@material-ui/icons/Redo';
import tsbPreview from './tsbPreview.png'
import tsbGif from './tsbGif.gif'
import TSBstack from './TSBstack'
import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.up('mlg')]: {
            flexDirection: 'row'
        },
    },
    box: {
        width: '100%',
        [theme.breakpoints.up('mlg')]: {
            width: '50%'
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 20
    },
    link:{
        color: '#fefefe',
        textDecoration: 'none',
        '&:hover':{
            color: theme.palette.secondary.dark,
        }
    },
    boxRight: {
        position: 'relative',
        paddingTop: 20,
        [theme.breakpoints.up('mlg')]: {
            paddingTop: 75
        },
        paddingBottom: 0,
        justifyContent: 'space-between',
        marginRight: 0,
    },
    boxItem: {
        marginBottom: 20,
        marginTop: 10,
        paddingBottom: 10,
        paddingTop: 10
    },
    title: {
        borderBottom: `1px dotted ${theme.palette.secondary.main}`
    },
    projectText:{
        fontSize: '1.05rem',
        display: 'flex',
        [theme.breakpoints.up('mlg')]: {
            flexDirection:'column',
            fontSize: '1.08rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.1rem',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '1.25rem',
        },
    },
    textColumn:{
        padding: 10,
        [theme.breakpoints.up('mlg')]: {
            padding: 0,
            paddingRight: 5
        },
    },
    hoverArrowContainer:{
        display: 'none',
        [theme.breakpoints.up('mlg')]: {
            position: 'absolute',
            top: 60,
            right: 20,
            margin: 0,
            padding: 0,
            display: 'flex',
            fontStyle: 'italic',
            transform: 'rotate(10deg)'
        },
    },
    hoverArrow:{
        color: theme.palette.secondary.main,
        transform: 'rotate(55deg)'
    },
    imgContainer: {
        [theme.breakpoints.up('md')]: {
            width: 600,
            height: 360,
        },
        [theme.breakpoints.up('mlg')]: {
            width: 480,
            height: 288,
        },
        [theme.breakpoints.up('lg')]: {
            width: 500,
            height: 300,
        },
        [theme.breakpoints.up('xl')]: {
            width: 600,
            height: 360,
        },
        width: 450,
        height: 270,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 0,
        marginBottom: 20,
        marginTop: 20,
        padding:0,
        '&:hover':{
            boxShadow: '1px 1px 10px black'
        }, 
        '&:hover $cardImg':{
            display: 'none'
        },
        '&:hover $cardGif':{
            display: 'block'
        }
    },
    cardImg: {
        width: '100%',
        height: '100%',
    },
    cardGif: {
        display: 'none',
        width: '100%',
        height: '100%'
    },
    stackBox: {
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 0,
    },
    linksBox: {
        width: '65%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
        marginTop: 50,
        paddingTop: 20,
        borderTop: `1px dotted ${theme.palette.secondary.main}`
    },
    iconBtn: {
        paddingTop: 2,   
        borderBottom: `1px solid #424242`,
        borderRadius: 0,
        '&:hover': {
            color: theme.palette.secondary.dark,
            backgroundColor: '#424242',
            borderBottom: `1px solid #5d5d5d`
        }
    },
    linkIcons: {
        marginTop: 5,
        paddingBottom: 5,
        fontSize: 45,
        backgroundColor: 'transparent',
    },
    iconLabels:{
        fontSize: '0.8rem',
    }, 
}));

const TSBCard = () => {

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Box className={classes.box}>
                <a href="https://tsbcoaching.ie/tsb" target="_blank" rel="noreferrer" className={classes.link}>
                    <Typography
                        variant='h1'
                        className={clsx(classes.boxItem, classes.title)}>
                        The Sounding Board
                    </Typography>
                </a>
                <Typography className={classes.projectText}>
                    <div className={classes.textColumn}>
                        The Sounding Board (TSB) is a coaching and HR consultancy service offered by ICF accredited coach Mona Eames. I approached to help build the new TSB website as they were tranisitioning away from Squarespace. 
                        <br /><br />
                        Tech stack:<br/> React - NodeJS/Express - Firebase - Heroku - Netlify
                        <br /><br />
                        This web application uses a lightweight NodeJS/Express backend to fetch data (blog posts, contact form) stored in Google Firebase. These calls are secured using a combination of HTTPS, CORS and Google API restrictions.
                        <br /><br />
                    </div>
                    <div className={classes.textColumn}>
                        I worked with a professional designer for this project, implementing their design spec using my own custom CSS.
                        <br /><br />
                        I also built a custom CMS so that the client could write, edit, publish, and delete blog posts from a seperate web app, secured with an additional layer of firebase authentication. 
                        <br /><br />
                        Hosted on Netlify with two domains integrated from Blacknight.com
                        <br /><br />
                        This web app is not yet responsive as the client wanted to focus on desktop preformance first.
                    </div>
                </Typography>
            </Box>
            <Box className={clsx(classes.box, classes.boxRight)}>
                <Box className={classes.hoverArrowContainer}>
                    <Typography variant='body2'>
                        Hover &nbsp;
                    </Typography>
                    <RedoIcon className={classes.hoverArrow}/>
                </Box>
                <a href="https://tsbcoaching.ie/tsb" target="_blank" rel="noreferrer">
                    <Box className={clsx(classes.boxItem, 
                    classes.imgContainer)}>
                        <img src={tsbPreview} alt="The Sounding Board"
                            className={classes.cardImg} />
                        <img src={tsbGif} alt="The Sounding Board"
                            className={classes.cardGif} />
                    </Box>
                </a>
                <Box className={classes.stackBox}>
                    <TSBstack />
                </Box>
                <Box className={clsx(classes.boxItem, classes.linksBox)}>
                    <a href="https://github.com/StudiousVanilla/tsb/tree/master" target="_blank" rel="noreferrer">
                        <IconButton className={classes.iconBtn}>
                            <GitHubIcon className={classes.linkIcons} />
                        </IconButton>
                    </a>
                    <a href="https://tsbcoaching.ie/tsb" target="_blank" rel="noreferrer">
                        <IconButton className={classes.iconBtn}>
                            <ComputerTwoToneIcon className={classes.linkIcons}/>
                        </IconButton>
                    </a>
                </Box>
            </Box>
        </Container>
    );
}

export default TSBCard;