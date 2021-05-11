import { Container, Divider, makeStyles } from "@material-ui/core";
import TSBTab from './ProjectTabletComps/TSBTab'
import LOTRTab from './ProjectTabletComps/LOTRTab'
import MiscTab from './ProjectTabletComps/MiscTab'


const useStyles = makeStyles((theme) => ({

    container:{
        display: 'none',
        // eslint-disable-next-line
        ['@media (max-width:960px)']: {
            marginTop: 100,
            marginBottom: 250,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#272727',
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
            <Divider dark />
            <LOTRTab/>
            <MiscTab/>
        </Container>
     );
}
 
export default ProjectTablet;