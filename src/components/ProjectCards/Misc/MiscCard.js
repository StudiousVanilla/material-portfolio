import clsx from 'clsx'
import { Box, Container, IconButton, Link, makeStyles, Typography } from "@material-ui/core";
import Backdrop from '@material-ui/core/Backdrop';
import GitHubIcon from '@material-ui/icons/GitHub';
import MiscStack from './MiscStack'

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
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    box: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    backdrop: {
        position: 'relative',
        width: '105%',
        height: '100%',
        zIndex: 1,
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            width: '110%',
        },
      },
    typographyContainer:{
        position: 'absolute',
        height: '100%',
        padding: 30,
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        zIndex: 3,
    },
    typography:{
        paddingTop: 30,
        [theme.breakpoints.down('lg')]: {
            fontSize: 28
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 24
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 21
        },
        // eslint-disable-next-line
        ['@media (max-width:960px)']: {
            fontSize: '1.5em'
        },
        // eslint-disable-next-line
        ['@media (max-width:780px)']: {
            fontSize: '1.05em'
        },
    },
    typographyTop:{
        paddingTop: 70,
        
    },
    icon:{
        fontSize: 100,
        color: '#fefefe',
        '&:hover': {
            color: theme.palette.secondary.main,
            backgroundColor: 'transparent',
        },
        [theme.breakpoints.down('md')]: {
            marginBottom: 20
        },
    },
    iconBtn: {
        borderRadius: 0,
        '&:hover': {
            backgroundColor: 'transparent',
        }
    },
}));

const MiscCard = () => {

const classes = useStyles();

    return ( 

        <Container className={classes.container}>
            <Box className={classes.box}>
                <Backdrop className={classes.backdrop} open={true} >
                    <MiscStack/> 
                </Backdrop>
                <Container className={classes.typographyContainer}>
                    <Typography
                    variant='h4' 
                    className={clsx(classes.typography, classes.typographyTop)}>
                        I've made loads of projects, using dozens of different technologies.  
                    </Typography>
                    <Typography
                    variant='h4' 
                    className={classes.typography}> 
                        With over 40 public repositories on <Link href="https://github.com/StudiousVanilla?tab=repositories" target="_blank" rel="noreferrer" color="secondary"> GitHub </Link>, there's plenty to check out.
                    </Typography>
                    <IconButton className={classes.iconBtn}>
                        <Link href="https://github.com/StudiousVanilla?tab=repositories" target="_blank" rel="noreferrer" color="secondary">
                            <GitHubIcon className={classes.icon}/>
                        </Link>
                    </IconButton>
                </Container>
            </Box>
        </Container>

     );
}
 
export default MiscCard;