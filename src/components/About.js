import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    container:{
        margin: 100
    }
}))

const About = () => {

    const classes = useStyles();

    return ( 
        <Container className={classes.container}>
            <Typography>
                about me
            </Typography>
        </Container>
     );
}
 
export default About;