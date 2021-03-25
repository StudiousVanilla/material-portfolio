import { Box, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Carousel from 'react-elastic-carousel';
import TSBCard from './ProjectCards/TSB/TSBCard';
import TSBCardAlt from './ProjectCards/TSB/TSBCardAlt';
import TSBCardAltNavy from './ProjectCards/TSB/TSBCardAltNavy';
import TSBCardGif from './ProjectCards/TSB/TSBCardGif';

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
                            <TSBCardGif/>
                        </Card>
                    </div>
                    <div className={classes.carouselItems}>
                        <Card className={classes.card}>
                           <TSBCardAlt/>
                        </Card>
                    </div>
                    <div className={classes.carouselItems}>
                        <Card className={classes.card}>
                            <TSBCardAltNavy/>
                        </Card>
                    </div>
                </Carousel>
            </Box>
      </Container>
     );
}
 
export default Projects;