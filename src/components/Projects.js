import { Box, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Carousel from 'react-elastic-carousel';
import DrinkMXRCard from './ProjectCards/DrinkMXR/DrinkMXRCard';
import TSBCard from './ProjectCards/TSB/TSBCard';
import LOTRCard from './ProjectCards/LOTR/LOTRCard';
import MiscCard from './ProjectCards/Misc/MiscCard';

const useStyles = makeStyles((theme) => ({
    container:{
        maxWidth: '80vw',
        minWidth: 500,
        [theme.breakpoints.up('md')]: {
            maxWidth: '90vw'
        },
        [theme.breakpoints.down('sm')]: {
            width: '95vw',
            maxWidth: 980,
          },
        // eslint-disable-next-line
        ['@media (max-width:960px)']: {
            display: 'none'
        },
        marginTop: 5,
        marginBottom: 200,
        display: 'flex',
        justifyContent: 'center',
    },
    box:{
        width: '100%', 
    },
    carouselItems: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(1),
            width: theme.spacing(98),
            height: theme.spacing(82),
          },
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(1),
            width: theme.spacing(120),
            height: theme.spacing(88),
          },
        [theme.breakpoints.up('mlg')]: {
            margin: theme.spacing(1),
            width: theme.spacing(144),
            height: theme.spacing(82),
          },
        [theme.breakpoints.up('lg')]: {
            margin: theme.spacing(1),
            width: theme.spacing(144),
            height: theme.spacing(86),
          },
        [theme.breakpoints.up('xl')]: {
            margin: theme.spacing(1),
            width: theme.spacing(160),
            height: theme.spacing(100),
          },
      },
    },
    card:{
        margin: '0px',
        borderRadius: 20
    }
}));

const Projects = () => {

    const classes = useStyles();

    return ( 
        <Container className={classes.container}>
            <Box className={classes.box}>
                <Carousel>
                    <div className={classes.carouselItems}>
                        <Card className={classes.card}>
                            <DrinkMXRCard/>
                        </Card>
                    </div>
                    <div className={classes.carouselItems}>
                        <Card className={classes.card}>
                            <TSBCard/>
                        </Card>
                    </div>
                    <div className={classes.carouselItems}>
                        <Card className={classes.card}>
                            <LOTRCard/>
                        </Card>
                    </div>
                    <div className={classes.carouselItems}>
                        <Card className={classes.card}>
                           <MiscCard/>
                        </Card>
                    </div>
                </Carousel>
            </Box>
      </Container>
     );
}
 
export default Projects;