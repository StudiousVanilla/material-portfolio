import clsx from 'clsx'
import { Container, makeStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PersonIcon from '@material-ui/icons/Person';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

const useStyles = makeStyles((theme) => ({
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
        borderRadius: 20,
        border: '5px solid transparent',
        '&:hover': {
            border: '5px solid'
        },
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
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} s={12} md={12} lg={4}
                    className={classes.aboutItems}>
                    <Card 
                    className={clsx(classes.card, classes.primary)}
                    elevation={6}>
                        <Container className={classes.cardContent}>
                            <Typography className={classes.cardText}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, officiis saepe voluptatibus sint adipisci ipsa nulla ex eum molestiae, eveniet sunt eaque.
                            </Typography>
                            <PersonIcon
                                className={
                                    clsx(classes.cardIcon, classes.primary)}
                            />
                            <Typography className={classes.cardText}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, officiis saepe voluptatibus sint adipisci ipsa nulla ex eum molestiae, eveniet sunt eaque.
                            </Typography>
                        </Container>
                    </Card>
                </Grid>
                <Grid item xs={12} s={12} md={12} lg={4}
                    className={classes.aboutItems}>
                    <Card 
                    className={clsx(classes.card, classes.secondary)}
                    elevation={6}>
                        <Container className={classes.cardContent}>
                            <Typography className={classes.cardText}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, officiis saepe voluptatibus sint adipisci ipsa nulla ex eum molestiae, eveniet sunt eaque.
                            </Typography>
                            <AccountTreeIcon 
                                className={clsx(classes.cardIcon, classes.secondary)}/>
                            <Typography className={classes.cardText}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, officiis saepe voluptatibus sint adipisci ipsa nulla ex eum molestiae, eveniet sunt eaque.
                            </Typography>
                        </Container>
                    </Card>
                </Grid>
                <Grid item xs={12} s={12} md={12} lg={4}
                    className={classes.aboutItems}>
                    <Card className={clsx(classes.card, classes.tertiary)}
                    elevation={6}>
                        <Container className={classes.cardContent}>
                            <Typography className={classes.cardText}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, officiis saepe voluptatibus sint adipisci ipsa nulla ex eum molestiae, eveniet sunt eaque.
                            </Typography>
                            <MenuBookIcon
                                className={
                                    clsx(classes.cardIcon, 
                                    classes.tertiary)}
                            />
                            <Typography className={classes.cardText}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, officiis saepe voluptatibus sint adipisci ipsa nulla ex eum molestiae, eveniet sunt eaque.
                            </Typography>
                        </Container>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Intro;