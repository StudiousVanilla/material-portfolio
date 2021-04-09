import { Box, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Carousel from 'react-elastic-carousel';
import TSBCard from './ProjectCards/TSB/TSBCard';

const useStyles = makeStyles((theme) => ({
    container:{
        maxWidth: '80vw',
        minWidth: 500,
        [theme.breakpoints.up('tab')]: {
            maxWidth: '100vw'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '90vw'
        },
        marginTop: 100,
        marginBottom: 200,
        display: 'flex',
        justifyContent: 'center',
    },
    box:{
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            backgroundColor: 'yellow'
        },
        [theme.breakpoints.up('tab')]: {
            backgroundColor: 'brown'
        },
        [theme.breakpoints.up('md')]: {
            backgroundColor: 'green'
        },
        [theme.breakpoints.up('mlg')]: {
            backgroundColor: 'purple'
        },
        [theme.breakpoints.up('lg')]: {
            backgroundColor: 'red'
        },
        [theme.breakpoints.up('xl')]: {
            backgroundColor: 'blue'
        },  
    },
    carouselItems: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        [theme.breakpoints.up('tab')]: {
            margin: theme.spacing(1),
            width: theme.spacing(104),
            height: theme.spacing(144),
          },
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(1),
            width: theme.spacing(120),
            height: theme.spacing(144),
          },
        [theme.breakpoints.up('mlg')]: {
            margin: theme.spacing(1),
            width: theme.spacing(124),
            height: theme.spacing(88),
          },
        [theme.breakpoints.up('lg')]: {
            margin: theme.spacing(1),
            width: theme.spacing(132),
            height: theme.spacing(88),
          },
        [theme.breakpoints.up('xl')]: {
            margin: theme.spacing(1),
            width: theme.spacing(160),
            height: theme.spacing(96),
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
                            <TSBCard/>
                        </Card>
                    </div>
                    <div className={classes.carouselItems}>
                        <Card className={classes.card}>
                           
                        </Card>
                    </div>
                </Carousel>
            </Box>
      </Container>
     );
}
 
export default Projects;