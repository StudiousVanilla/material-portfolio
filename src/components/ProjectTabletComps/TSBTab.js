import { Box, makeStyles, Typography } from "@material-ui/core";
import tsbLogo from '../AboutSteps/AboutStepsImgs/tsbLogo.svg'
import tsb from '../ProjectCards/TSB/tsbPreview.png'
import tsbGif from '../ProjectCards/TSB/tsbgif.gif'
import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone';

const useStyles = makeStyles((theme) => ({

    container:{
        width: '100%',
        height: '60vh',
        minHeight: 500,
        display: 'flex',
        marginBottom: 30,
        padding: 20,
        flexDirection: 'column',
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
        '&:hover $img':{
            display: 'none'
        },
        '&:hover $gif':{
            display: 'block'
        }
    },
    img:{
         width: '100%',
    },
    gif:{
        width: '100%',
        display: 'none',
        boxShadow: '2px 2px 5px black'
    },
    details:{
        height: 350,
        width: '50%',
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
        textDecoration: 'none',
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
                <a href="https://tsbcoaching.ie/tsb" target="_blank" rel="noreferrer" className={classes.link}>
                    <Typography className={classes.title} variant='h2'>
                        The Sounding Board
                    </Typography>
                </a>
            </Box>
            <Box className={classes.row}>
                <Box className={classes.details}>
                    <Typography variant='body2' style={{paddingRight:15, marginBottom:20}}>
                        The Sounding Board (TSB) is a coaching and HR consultancy service offered by ICF accredited coach Mona Eames. I approached to help build the new TSB website as they were tranisitioning away from Squarespace. 
                        <br/><br/>
                        Tech stack:<br/> React - NodeJS/Express - Firebase - Heroku - Netlify
                        <br/><br/>
                        This web app uses a lightweight NodeJS/Express backend to fetch data  stored in Google Firebase.
                    </Typography>
                    <Box className={classes.linkContainer}>
                        <a href="https://github.com/StudiousVanilla/tsb/tree/master" target="_blank" rel="noreferrer" className={classes.link}>
                            <GitHubIcon style={{fontSize:40}}/>
                        </a>
                        <a href="https://tsbcoaching.ie/tsb" target="_blank" rel="noreferrer" className={classes.link}>
                            <ComputerTwoToneIcon style={{fontSize:40}}/>
                        </a>
                    </Box>
                </Box>
                <Box className={classes.imgContainer}>
                    <a href="https://tsbcoaching.ie/tsb" target="_blank" rel="noreferrer" className={classes.link}>
                        <img src={tsb} alt="The Sounding Board Preview" className={classes.img}/>
                        <img src={tsbGif} alt="The Sounding Board Preview" className={classes.gif}/>
                    </a>
                </Box>
            </Box>
        </Box>
     );
}
 
export default TSBTab;