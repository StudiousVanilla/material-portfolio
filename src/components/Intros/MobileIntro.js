import clsx from 'clsx'
import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import screen from './screen.svg'
import PersonIcon from '@material-ui/icons/Person';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const useStyles = makeStyles((theme)=> ({

    container:{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
         },
    },
    box:{
        position: 'relative',
        height: '45vh',
        width: '50vw',
        minWidth: 250,
        maxWidth: 500,
        marginTop: -50,
        zIndex: 1,
     },
     icon:{
        width: '100%',
        height: '100%',
     },
     overIconLeft:{
        position: 'absolute',
        top: '25%',
        left: '20%',
        height: '25%',
        width: '25%',
     },
     overIconRight:{
        position: 'absolute',
        top: '25%',
        right: '20%',
        height: '25%',
        width: '25%',
     },
     typography:{
         marginTop: 20,
         padding: 10,
         fontSize: '1rem',
         [theme.breakpoints.up('sm')]: {
            fontSize: '2rem',
         },
     },
     tertiary:{
         color: theme.palette.info.main
     },
     danceBox:{
        position: 'absolute',
        bottom: 5,
        right: 10,
     },
     arrow:{
        height: '2rem',
        width: '2rem',
        animation: 'bounceMob 2s',
        animationIterationCount: 'infinite',
        [theme.breakpoints.up('sm')]: {
            height: '4rem',
            width: '4rem',
         },
     },
     phone:{
        height: '2rem',
        width: '2rem',
        animation: 'wobble 0.5s',
        animationIterationCount: 'infinite',
        [theme.breakpoints.up('sm')]: {
            height: '4rem',
            width: '4rem',
         },
     }
}));

const MobileIntro = () => {

    const classes = useStyles()


    return ( 
        <Container className={classes.container}>
            <Box className={classes.box}>
                <img src={screen} alt="screen" className={classes.icon}/>
                <PersonIcon className={clsx(classes.overIconLeft, classes.tertiary)}/>
                <AccountTreeIcon className={classes.overIconRight} color="secondary"/>
            </Box>
            <Typography className={classes.typography}>
                This website is best viewed with a wide screen
            </Typography>
            <Box className={classes.danceBox}>
                <ExpandMoreIcon className={classes.arrow}/>
                <PhoneAndroidIcon className={classes.phone} color='primary'/>
            </Box>
        </Container>
     );
}
 
export default MobileIntro;