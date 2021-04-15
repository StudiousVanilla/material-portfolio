import { Container, makeStyles } from "@material-ui/core";
import TSBTab from './ProjectTabletComps/TSBTab'
import MiscTab from './ProjectTabletComps/MiscTab'


const useStyles = makeStyles((theme) => ({

    container:{
        display: 'none',
        // eslint-disable-next-line
        ['@media (max-width:960px)']: {
            marginTop: 100,
            marginBottom: 250,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#424242',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    }
}))


const ProjectTablet = () => {

    const classes = useStyles()

    return ( 
        <Container className={classes.container}>
            <TSBTab/>
            <MiscTab/>
        </Container>
     );
}
 
export default ProjectTablet;