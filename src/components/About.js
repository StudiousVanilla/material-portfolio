import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Carousel from 'react-elastic-carousel';

const useStyles = makeStyles((theme) => ({
    carouselItems: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(72),
        height: theme.spacing(88)
      },
    },
    card:{
        borderRadius: 20
    }
  }));

const About = () => {

    const classes = useStyles();

    return ( 
        <Container>
            <Carousel>
                <div className={classes.carouselItems}>
                    <Card className={classes.card}>
                            1
                    </Card>
                </div>
                <div className={classes.carouselItems}>
                    <Card className={classes.card}>
                        2
                    </Card>
                </div>
                <div className={classes.carouselItems}>
                    <Card className={classes.card}>
                        3
                    </Card>
                </div>
            </Carousel>
      </Container>
     );
}
 
export default About;