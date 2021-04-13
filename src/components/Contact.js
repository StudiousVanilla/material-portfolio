import clsx from 'clsx'
import { Box, Container, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import DescriptionIcon from '@material-ui/icons/Description';
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
        marginBottom: 400,
        marginTop: 20,
        paddingTop: 50,
        [theme.breakpoints.down('sm')]: {
            height:'100vh',
            marginBottom: 200,
            marginTop: 10,
            paddingTop: 10,
        },
    },
    box:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingLeft: 24,
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 100
        },
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
        color: '#fefefe',
        '&:hover $cv':{
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
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem'
        },
    },
    icon:{
        fontSize: 40,
        color: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem'
        },
    },
    cv:{
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
    },
    link:{
        '&:hover':{
            textDecoration: 'none'
        }
    },
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
                        <MailIcon className={ clsx(classes.icon, classes.mail)} />
                        &#160;
                        byrne.ois@gmail.com
                    </Typography>


                    <Link target="_blank" rel="noopener noreferrer" 
                    href="O.Byrne.CV2021.pdf" download=""
                    className={classes.link}>
                        <Typography className={clsx(classes.typography, classes.pointer)} variant='h4'>
                            <DescriptionIcon 
                            className={ clsx(classes.icon, classes.cv)} />
                            &#160;
                            Download CV
                            &#160;
                            <OpenInNewIcon color='disabled' fontSize='small'/>
                        </Typography>
                    </Link>

                    <Link href="https://github.com/StudiousVanilla"
                    target="_blank" rel="noreferrer"
                    className={classes.link}>
                        <Typography className={clsx(classes.typography, classes.pointer)} variant='h4'>
                            <GitHubIcon 
                            className={ clsx(classes.icon, classes.github)} />
                            &#160;
                            Github
                            &#160;
                            <OpenInNewIcon color='disabled' fontSize='small'/>
                        </Typography>
                    </Link>

                    <Link href="https://www.linkedin.com/in/ois%C3%ADn-byrne/"
                    target="_blank" rel="noreferrer"
                    className={classes.link}>
                        <Typography className={clsx(classes.typography, classes.pointer)} variant='h4'>
                            <LinkedInIcon className={ clsx(classes.icon, classes.LinkedIn)} />
                            &#160;
                            LinkedIn
                            &#160;
                            <OpenInNewIcon color='disabled' fontSize='small'/>
                        </Typography>
                    </Link>
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