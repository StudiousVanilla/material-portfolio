import { Box, makeStyles, Typography } from "@material-ui/core";
import LOTRLogo from './tabLogos/LOTR.png'
import LOTR from '../ProjectCards/LOTR/LOTRPreview.png'
import LOTRGif from '../ProjectCards/LOTR/LOTRgif.gif'
import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone';

const useStyles = makeStyles((theme) => ({

    container:{
        width: '100%',
        height: '60vh',
        minHeight: 500,
        display: 'flex',
        paddingTop: 20,
        paddingBottom: 80,
        paddingLeft: 40,
        paddingRight: 40,
        flexDirection: 'column',
        backgroundColor: '#363636'
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
        backgroundColor: 'transparent',
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
    tabText:{
        fontSize: '0.92rem',
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
                    <img src={LOTRLogo} alt="TSB Logo"  className={classes.img}/>
                </Box>
                <a href="https://hungry-goodall-28f444.netlify.app/" target="_blank" rel="noreferrer" className={classes.link}>
                    <Typography className={classes.title} variant='h2'>
                        LOTR Quotes
                    </Typography>
                </a>
            </Box>
            <Box className={classes.row}>
                <Box className={classes.details}>
                    <Typography className={classes.tabText} style={{paddingRight:15, marginBottom:20}}>
                        I built this project to get some more practice using API's and data fetching. It's a 'Lord of the Rings' quote generator 
                        <br/><br/>
                        Tech stack:<br/> React - NodeJS/Express - Heroku - Netlify
                        <br/><br/>
                        This web app uses a lightweight NodeJS/Express backend to fetch data from 'The One Api':
                        <a href="https://the-one-api.dev/">https://the-one-api.dev/</a>
                    </Typography>
                    <Box className={classes.linkContainer}>
                        <a href="https://github.com/StudiousVanilla/api_practice_frontend" target="_blank" rel="noreferrer" className={classes.link}>
                            <GitHubIcon style={{fontSize:40}}/>
                        </a>
                        <a href="https://hungry-goodall-28f444.netlify.app/" target="_blank" rel="noreferrer" className={classes.link}>
                            <ComputerTwoToneIcon style={{fontSize:40}}/>
                        </a>
                    </Box>
                </Box>
                <Box className={classes.imgContainer}>
                    <a href="https://tsbcoaching.ie/tsb" target="_blank" rel="noreferrer" className={classes.link}>
                        <img src={LOTR} alt="LOTR Preview" className={classes.img}/>
                        <img src={LOTRGif} alt="LOTR Preview" className={classes.gif}/>
                    </a>
                </Box>
            </Box>
        </Box>
     );
}
 
export default TSBTab;