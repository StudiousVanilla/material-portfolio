import { Container, makeStyles } from '@material-ui/core';
import MiscCard from '../ProjectCards/Misc/MiscCard'

const useStyles = makeStyles((theme) => ({ 

    container:{
        height: '70vh',
        minHeight: 500,
        width: '105vw',
        marginLeft: -50
    }

 }))

const MiscTab = () => {

    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <MiscCard/>
        </Container>
     );

}
 
export default MiscTab;