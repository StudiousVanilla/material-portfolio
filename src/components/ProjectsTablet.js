import { Container, makeStyles } from "@material-ui/core";
import TSBTab from './ProjectTabletComps/TSBTab'


const useStyles = makeStyles((theme) => ({

    container:{
        display: 'none',
        // eslint-disable-next-line
        ['@media (max-width:960px)']: {
            display: 'flex',
            backgroundColor: '#424242',
            height: '60vh',
            marginTop: 100,
            marginBottom: 250,
        }
    }
}))


const ProjectTablet = () => {

    const classes = useStyles()

    return ( 
        <Container className={classes.container}>
            <TSBTab/>
        </Container>
     );
}
 
export default ProjectTablet;