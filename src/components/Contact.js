import clsx from 'clsx'
import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ContactForm from './ContactForm'

const useStyles = makeStyles((theme) => ({
    container:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgb(255, 255, 255)',
        marginBottom: 200,
        marginTop: 30,
        paddingTop: 30,
        borderTop: '1px solid #525252'
    },
    box:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingLeft: 24,
    },
    gridItem:{
        height: 450,
        display: 'flex',
        alignItems: 'flex-end'
    },
    typography:{
        width: 'fit-content',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
        '&:hover $phone':{
            transform: 'scale(1.02)',
            animation: 'wobble 0.5s',
            animationIterationCount: 'infinite',
        },
        '&:hover $mail':{
            transform: 'scale(1.02)',
            animation: 'slide 4s',
            animationIterationCount: 'infinite',
        },
        '&:hover $github':{
            transform: 'scale(1.02)',
            animation: 'spin 6s',
            animationIterationCount: 'infinite',
        },
        '&:hover $LinkedIn':{
            transform: 'scale(1.02)',
            animation: 'bounce 2s',
            animationIterationCount: 'infinite',
        }
    },
    icon:{
        fontSize: 40,
        color: theme.palette.primary.main,
    },
    phone:{
        '&:hover': {
            transform: 'scale(1.02)',
            animation: 'wobble 0.5s',
            animationIterationCount: 'infinite',
        }
    },
    mail:{
        position: 'relative',
        '&:hover': {
            transform: 'scale(1.02)',
            animation: 'slide 4s',
            animationIterationCount: 'infinite',
        }
    },
    github:{
        '&:hover': {
            transform: 'scale(1.02)',
            animation: 'spin 6s',
            animationIterationCount: 'infinite',
        }
    },
    LinkedIn:{
        '&:hover': {
            transform: 'scale(1.02)',
            animation: 'bounce 2s',
            animationIterationCount: 'infinite',
        }
    },
    pointer:{
        cursor: 'pointer'
    }
}));


const Contact = () => {
    
    const classes = useStyles();

    return (
        <Container>
        <Grid container className={classes.container}>
            <Grid item xs={12} s={12} md={12} lg={6} 
            className={classes.gridItem}>
                <Box className={classes.box}>
                    <Typography className={classes.typography} variant='h4'>
                        <PhoneAndroidIcon 
                        className={ clsx(classes.icon, classes.phone)} />
                        &#160;
                        0857416273
                    </Typography>
                    <Typography className={classes.typography} variant='h4'>
                        <MailIcon className={ clsx(classes.icon, classes.mail)} />
                        &#160;
                        byrne.ois@gmail.com
                    </Typography>
                    <Typography className={clsx(classes.typography, classes.pointer)} variant='h4'>
                        <GitHubIcon 
                        className={ clsx(classes.icon, classes.github)} />
                        &#160;
                        Github
                        &#160;
                        <OpenInNewIcon color='disabled' fontSize='small'/>
                    </Typography>
                    <Typography className={clsx(classes.typography, classes.pointer)} variant='h4'>
                        <LinkedInIcon className={ clsx(classes.icon, classes.LinkedIn)} />
                        &#160;
                        LinkedIn
                        &#160;
                        <OpenInNewIcon color='disabled' fontSize='small'/>
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} s={12} md={12} lg={6} 
            className={classes.gridItem}>
                <ContactForm/>
            </Grid>
        </Grid>
        </Container>
     );
}
 
export default Contact;