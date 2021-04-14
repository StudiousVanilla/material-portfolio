import { Box, makeStyles, Typography } from "@material-ui/core";
import tsbLogo from '../AboutSteps/AboutStepsImgs/tsbLogo.svg'
import tsb from '../ProjectCards/TSB/tsbPreview.png'
import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone';

const useStyles = makeStyles((theme) => ({

    container:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 20
    },
    row:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo:{
        height: 60,
        width: 60,
        marginRight: 20,
        borderRadius: 100,
        backgroundColor: '#0D274F',
    },
    title:{
        borderBottom: `1px dotted ${theme.palette.secondary.main}`
    },
    imgContainer:{
        width: '60%',
        height: '100%',
    },
    img:{
         width: '100%'
    },
    details:{
        height: 350,
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '1rem',
    },
    linkContainer:{
        width: '60%',
        paddingTop: 20,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTop: `1px dotted ${theme.palette.secondary.main}`
    },
    link:{
        color: '#fefefe',
        '&:hover':{
            color: theme.palette.secondary.dark
        },
    }
}))


const TSBTab = () => {

    const classes = useStyles()

    return ( 
        <Box className={classes.container}>
            <Box className={classes.row} style={{marginBottom: 40}}>
                <Box className={classes.logo}>
                    <img src={tsbLogo} alt="TSB Logo"  className={classes.img}/>
                </Box>
                <Typography className={classes.title} variant='h2'>
                    The Sounding Board
                </Typography>
            </Box>
            <Box className={classes.row}>
                <Box className={classes.details}>
                    <Typography style={{paddingRight:10, marginBottom:20}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga amet, neque corrupti eligendi obcaecati accusantium maiores tenetur debitis tempore? Dolor sed saepe vero perspiciatis laboriosam fugiat debitis suscipit distinctio minima.
                        <br/><br/>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente libero dolor doloremque nihil mollitia incidunt odit eos, quisquam laboriosam possimus in.
                    </Typography>
                    <Box className={classes.linkContainer}>
                        <a href="" className={classes.link}>
                            <GitHubIcon style={{fontSize:40}}/>
                        </a>
                        <a href="" className={classes.link}>
                            <ComputerTwoToneIcon style={{fontSize:40}}/>
                        </a>
                    </Box>
                </Box>
                <Box className={classes.imgContainer}>
                    <img src={tsb} alt="The Sounding Board Preview" className={classes.img}/>
                </Box>
            </Box>
        </Box>
     );
}
 
export default TSBTab;