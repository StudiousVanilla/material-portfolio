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
    }
}));

const TSBCard = () => {

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Box className={classes.box}>
                <Typography
                    variant='h1'
                    className={clsx(classes.boxItem, classes.title)}>
                    The Sounding Board
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus placeat ex corrupti esse nihil molestiae maxime impedit, possimus voluptatum explicabo, vero fugit odio enim est quo, facilis id quia quasi.
                    <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsum nihil, est cumque doloremque blanditiis quaerat consequuntur vitae, reprehenderit quisquam facere asperiores dignissimos recusandae saepe doloribus? Iusto maiores magni consequatur.
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus placeat ex corrupti esse nihil molestiae maxime impedit, possimus voluptatum explicabo, vero fugit odio enim est quo, facilis id quia quasi.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus placeat ex corrupti esse nihil molestiae maxime impedit, possimus voluptatum explicabo, vero fugit odio enim est quo, facilis id quia quasi.
                    <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsum nihil, est cumque doloremque blanditiis quaerat consequuntur vitae, reprehenderit quisquam facere asperiores dignissimos recusandae saepe doloribus? Iusto maiores magni consequatur.
                </Typography>
            </Box>
            <Box className={clsx(classes.box, classes.boxRight)}>
                <Box className={classes.hoverArrowContainer}>
                    <Typography variant='body2'>
                        Hover &nbsp;
                    </Typography>
                    <RedoIcon className={classes.hoverArrow}/>
                </Box>
                <Box className={clsx(classes.boxItem, 
                classes.imgContainer)}>
                    <img src={tsbPreview} alt="The Sounding Board"
                        className={classes.cardImg} />
                    <img src={tsbGif} alt="The Sounding Board"
                        className={classes.cardGif} />
                </Box>
                <Box className={classes.stackBox}>
                    <TSBstack />
                </Box>
                <Box className={clsx(classes.boxItem, classes.linksBox)}>
                    <IconButton className={classes.iconBtn}>
                        <GitHubIcon className={classes.linkIcons} />
                    </IconButton>
                    <IconButton className={classes.iconBtn}>
                        <ComputerTwoToneIcon className={classes.linkIcons} />
                    </IconButton>
                </Box>
            </Box>
        </Container>
    );
}

export default TSBCard;