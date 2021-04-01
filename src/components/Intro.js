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
        alignItems: 'center'
    },
    aboutItems: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > *": {
            margin: theme.spacing(0),
            width: theme.spacing(48),
            height: theme.spacing(56)
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
        justifyContent: "space-around"

    },
    cardText: {
        color: '#fff',
        textAlign: 'center'
    },
    cardIcon: {
        fontSize: 80
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
                    <Grid item xs={12} s={12} md={12} lg={4}
                        className={classes.aboutItems}>
                        <Card 
                        className={clsx(classes.card, classes.tertiary)}
                        elevation={6}>
                            <Link href={'#about'} className={classes.link}>
                                <Container className={classes.cardContent}>
                                    <Typography variant='h2'
                                    className={classes.cardText}>
                                        About me
                                    </Typography>
                                    <PersonIcon
                                    className={clsx(classes.cardIcon, classes.tertiary)}/>
                                    <Typography className={classes.cardText}>
                                        Learn a little about me, my background and how I came be be a web developer
                                    </Typography>
                                </Container>
                            </Link>
                        </Card>
                    </Grid>
                <Grid item xs={12} s={12} md={12} lg={4}
                    className={classes.aboutItems}>
                    <Card 
                    className={clsx(classes.card, classes.secondary)}
                    elevation={6}>
                        <Link href={'#projects'} className={classes.link}>
                            <Container className={classes.cardContent}>
                                <Typography variant='h2'
                                className={classes.cardText}>
                                    My Projects
                                </Typography>
                                <AccountTreeIcon 
                                    className={clsx(classes.cardIcon, classes.secondary)}/>
                                <Typography className={classes.cardText}>
                                Freelance websites, personal projects and practie web applications. Each with tech stack details, live demos and GitHub repo links
                                </Typography>
                            </Container>
                        </Link>
                    </Card>
                </Grid>
                <Grid item xs={12} s={12} md={12} lg={4}
                    className={classes.aboutItems}>
                    <Card className={clsx(classes.card, classes.primary)}
                    elevation={6}>
                        <Link href={'#contact'} className={classes.link}>
                            <Container className={classes.cardContent}>
                                <Typography variant='h2'
                                className={classes.cardText}>
                                    Contact
                                </Typography>
                                <PhoneAndroidIcon 
                                className={clsx(classes.cardIcon, classes.primary)}/>
                                <Typography className={classes.cardText}>
                                    Come say hello.
                                    Send me an email, connnect on LinkedIn and GitHub or use the form to leave a message 
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