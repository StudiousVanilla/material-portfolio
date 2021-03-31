import { Box, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Carousel from 'react-elastic-carousel';
import TSBCard from './ProjectCards/TSB/TSBCard';

const useStyles = makeStyles((theme) => ({
    container:{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 75,
        marginBottom: 200
    },
    box:{
        width: '100%'
    },
    carouselItems: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(128),
        height: theme.spacing(88)
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