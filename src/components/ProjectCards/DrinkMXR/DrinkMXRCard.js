import { Box, Container, IconButton, makeStyles, Typography } from "@material-ui/core";
import clsx from 'clsx'
import RedoIcon from '@material-ui/icons/Redo';
import DrinkMXR from './DrinkMXRPreview.png'
import DrinkMXRGif from './DrinkMXRgif.gif'
import DrinkMXRstack from './DrinkMXRstack'
import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    box: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
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
    linkText:{
        color: theme.palette.secondary.dark
    },
    boxRight: {
        position: 'relative',
        paddingBottom: 0,
        justifyContent: 'space-between',
        marginRight: 0,
        paddingTop: 60,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 50,
            justifyContent: 'flex-start',
        },
    },
    boxItem: {
        marginBottom: 20,
        marginTop: 10,
        paddingBottom: 10,
        paddingTop: 10
    },
    title: {
        borderBottom: `1px dotted ${theme.palette.secondary.main}`,
        fontSize: '2rem',
        [theme.breakpoints.up('md')]: {
            fontSize: 45
        },
    },
    projectText:{
        fontSize: '1rem',
        display: 'flex',
        flexDirection:'column',
        [theme.breakpoints.up('sm')]: {
            fontSize: '0.95rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.075rem',
            flexDirection:'column',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.1rem',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '1.25rem',
        },
    },
    projectTextUnderWrap:{
        position: "static",
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        [theme.breakpoints.down('sm')]: {
            position: "absolute",
            width: 720,
            left: 30,
            bottom: 30,
            paddingLeft: 20,
            flexDirection: 'row',
            fontSize: '0.9rem',
        },
    },
    underWrap:{
        [theme.breakpoints.down('sm')]: {
            width: '50%',
            paddingRight: 50,
        },
    },
    hoverArrowContainer:{
        display: 'none',
        [theme.breakpoints.up('mlg')]: {
            position: 'absolute',
            top: 40,
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
        [theme.breakpoints.up('sm')]: {
            width: 360,
            height: 216,
        },
        [theme.breakpoints.up('md')]: {
            width: 480,
            height: 288,
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
        [theme.breakpoints.down('sm')]: {
            width: '80%',
        },
    },
    linksBox: {
        width: '65%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
        marginTop: 50,
        paddingTop: 20,
        borderTop: `1px dotted ${theme.palette.secondary.main}`,
        [theme.breakpoints.down('sm')]: {
            width: '80%',
        },
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
        [theme.breakpoints.down('sm')]: {
            fontSize: 40,
        },
    },
    iconLabels:{
        fontSize: '0.8rem',
    }, 
}));

const DrinkMXRCard = () => {

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Box className={classes.box}>
                <a href="https://www.drinkmxr.com/" target="_blank" rel="noreferrer" className={classes.link}>
                    <Typography
                        variant='h1'
                        className={clsx(classes.boxItem, classes.title)}>
                        DrinkMXR
                    </Typography>
                </a>
                <Typography className={classes.projectText}>
                        DrinkMXR is a wesite to help you find the perfect drink. Select your ingredients and see all the different cocktails you could make. 
                        <br /><br />
                        Tech stack:<br/> NodeJS/Express - GraphQL - Heroku - React - Tailwind CSS - Netlify
                        <br /><br />
                        This web application uses Node/Express with GraphQL to organise and serve the backend data. The frontend is a Netlify hosted app, that uses React to fetch the backend data and is styled using Tailwind CSS. 
                        <br /><br />
                        The app is designed primarily for mobile, although it is optimisied for desktop.
                        <br /><br />
                        The API for this application: <span><a href="https://www.thecocktaildb.com/api.php" className={clsx(classes.link, classes.linkText)}>The Coctail API</a></span>
                        <br/>
                        Backend is in the same Heroku hosted app as my LOTR project to save on personal costs.
                        You can see get the back end repo here: <a href="https://github.com/StudiousVanilla/api_practice_backend" className={clsx(classes.link, classes.linkText)}>Backend Repo</a>
                        <br /><br /> 
                </Typography>
            </Box>
            <Box className={clsx(classes.box, classes.boxRight)}>
                <Box className={classes.hoverArrowContainer}>
                    <Typography variant='body2'>
                        Hover &nbsp;
                    </Typography>
                    <RedoIcon className={classes.hoverArrow}/>
                </Box>
                <a href="https://www.drinkmxr.com/" target="_blank" rel="noreferrer">
                    <Box className={clsx(classes.boxItem, 
                    classes.imgContainer)}>
                        <img src={DrinkMXR} alt="The Sounding Board"
                            className={classes.cardImg} />
                        <img src={DrinkMXRGif} alt="The Sounding Board"
                            className={classes.cardGif} />
                    </Box>
                </a>
                <Box className={classes.stackBox}>
                    <DrinkMXRstack />
                </Box>
                <Box className={clsx(classes.boxItem, classes.linksBox)}>
                    <a href="https://github.com/StudiousVanilla/drinkmxr" target="_blank" rel="noreferrer">
                        <IconButton className={classes.iconBtn}>
                            <GitHubIcon className={classes.linkIcons} />
                        </IconButton>
                    </a>
                    <a href="https://www.drinkmxr.com/" target="_blank" rel="noreferrer">
                        <IconButton className={classes.iconBtn}>
                            <ComputerTwoToneIcon className={classes.linkIcons}/>
                        </IconButton>
                    </a>
                </Box>
            </Box>
        </Container>
    );
}

export default DrinkMXRCard;