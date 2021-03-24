import { Box, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Carousel from 'react-elastic-carousel';
import TSBCard from './ProjectCards/TSBCard';
import NewsCard from './ProjectCards/NewsCard';

const useStyles = makeStyles((theme) => ({
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
    },
    container:{
        display: 'flex',
        justifyContent: 'center'
    },
    box:{
        width: '100%'
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
                            <NewsCard/>
                        </Card>
                    </div>
                    <div className={classes.carouselItems}>
                        <Card className={classes.card}>
                            3
                        </Card>
                    </div>
                </Carousel>
            </Box>
      </Container>
     );
}
 
export default Projects;