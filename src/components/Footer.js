import { Container, makeStyles, Typography } from "@material-ui/core"
import brain from './footerIcon/brain.svg'

const useStyles = makeStyles((theme)=>({
    container:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderTop: '1px solid #424242',
        [theme.breakpoints.down('sm')]: {
            marginTop: 200,
        },
    },
    typography:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#888888'
    },
    icon:{
        height: '1.3em'
    }
}))

const Footer = () => {

    const classes = useStyles()

    return ( 
        <Container className={classes.container}>
            <Typography className={classes.typography}>
                From the &nbsp;
                <img className={classes.icon} 
                title="brain" src={brain} alt="Brain"/> 
                &nbsp; of Oisín Byrne
            </Typography>
        </Container>
     );
}
 
export default Footer;