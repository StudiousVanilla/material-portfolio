import clsx from 'clsx'
import { Container, Link, makeStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PersonIcon from '@material-ui/icons/Person';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '80vh',
        marginTop: 50,
        marginBottom: 150,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'flex'
        },
        ['@media (max-width:960px)']:{

        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    aboutItems: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > *": {
            margin: theme.spacing(0),
            width: theme.spacing(44),
            height: theme.spacing(52),
            [theme.breakpoints.down('sm')]: {
                margin: theme.spacing(0),
                width: theme.spacing(32),
                height: theme.spacing(36),
            },
            ['@media (max-width:960px)']: {
                margin: theme.spacing(0),
                width: theme.spacing(24),
                height: theme.spacing(22),
            }, 
        },
    },
    card: {
        // backgroundColor: 'transparent',
        border: '3px solid transparent',
        borderRadius: 20,
        boxShadow: '1px 1px 1px transaprent',
        '&:hover': {
            border: '3px solid'
        },
    },
    link:{
        '&:hover':{
            color: 'transparent'
        }
    },
    cardContent: {
        height: '100%',
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
    cardTitle: {
        color: '#fff',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        },
        ['@media (max-width:960px)']: {
            fontSize: '1.5rem'
        },
    },
    cardText: {
        color: '#fff',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
           display: 'flex',
           fontSize: '1rem'
        },
        ['@media (max-width:960px)']:{
            display: 'none'
        }
    },
    cardIcon: {
        fontSize: 80,
        [theme.breakpoints.down('md')]: {
            fontSize: 80,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '5rem',
            marginTop: 10
        },  
    },
    primary:{
        color: theme.palette.primary.main
    },
    secondary:{
        color: theme.palette.secondary.main
    },
    tertiary: {
        color: theme.palette.info.main
    }
}));

const Intro = () => {

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container spacing={4}>
                    <Grid item xs={4} s={4} md={4} lg={4}
                        className={classes.aboutItems}>
                        <Card 
                        className={clsx(classes.card, classes.tertiary)}
                        elevation={6}>
                            <Link href={'#about'} className={classes.link}>
                                <Container className={classes.cardContent}>
                                    <Typography variant='h2'
                                    className={classes.cardTitle}>
                                        About
                                    </Typography>
                                    <PersonIcon
                                    className={clsx(classes.cardIcon, classes.tertiary)}/>
                                    <Typography variant='h6' className={classes.cardText}>
                                        Learn a little about me, my background and how I came to be a web developer
                                    </Typography>
                                </Container>
                            </Link>
                        </Card>
                    </Grid>
                <Grid item xs={4} s={4} md={4} lg={4}
                    className={classes.aboutItems}>
                    <Card 
                    className={clsx(classes.card, classes.secondary)}
                    elevation={6}>
                        <Link href={'#projects'} className={classes.link}>
                            <Container className={classes.cardContent}>
                                <Typography variant='h2'
                                className={classes.cardTitle}>
                                    Projects
                                </Typography>
                                <AccountTreeIcon 
                                    className={clsx(classes.cardIcon, classes.secondary)}/>
                                <Typography variant='h6'  className={classes.cardText}>
                                Tech stack details, live demos and GitHub repo links
                                </Typography>
                            </Container>
                        </Link>
                    </Card>
                </Grid>
                <Grid item xs={4} s={4} md={4} lg={4}
                    className={classes.aboutItems}>
                    <Card className={clsx(classes.card, classes.primary)}
                    elevation={6}>
                        <Link href={'#contact'} className={classes.link}>
                            <Container className={classes.cardContent}>
                                <Typography variant='h2'
                                className={classes.cardTitle}>
                                    Contact
                                </Typography>
                                <PhoneAndroidIcon 
                                className={clsx(classes.cardIcon, classes.primary)}/>
                                <Typography variant='h6'  className={classes.cardText}>
                                    Don't be shy, come say hello
                                </Typography>
                            </Container>
                            </Link>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Intro;