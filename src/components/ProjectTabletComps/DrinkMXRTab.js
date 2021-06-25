import { Box, makeStyles, Typography } from "@material-ui/core";
import DrinkMXLogo from './tabLogos/DrinkMXRLogo.svg'
import DrinkMXR from '../ProjectCards/DrinkMXR/DrinkMXRPreview.png'
import DrinkMXRGif from '../ProjectCards/DrinkMXR/DrinkMXRgif.gif'
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
        fontSize: '0.8rem',
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

const DrinkMXRTab = () => {

    const classes = useStyles()

    return ( 
        <Box className={classes.container}>
            <Box className={classes.row} style={{marginBottom: 40}}>
                <Box className={classes.logo}>
                    <img src={DrinkMXLogo} alt="DrinkMXR Logo"  className={classes.img}/>
                </Box>
                <a href="https://www.drinkmxr.com/" target="_blank" rel="noreferrer" className={classes.link}>
                    <Typography className={classes.title} variant='h2'>
                        DrinkMXR
                    </Typography>
                </a>
            </Box>
            <Box className={classes.row}>
                <Box className={classes.details}>
                    <Typography className={classes.tabText} style={{paddingRight:15, marginBottom:20}}>
                    DrinkMXR is a wesite to help you find the perfect drink. Select your ingredients and see all the different cocktails you could make.  
                        <br/><br/>
                        Tech stack:<br/> NodeJS/Express - GraphQL - Heroku - React - Tailwind CSS - Netlify
                        <br/><br/>
                        This web application uses Node/Express with GraphQL to serve the backend data. The frontend is a Reactapp that fetches the backend data, styled using Tailwind CSS and hosted on Netlify.
                    </Typography>
                    <Box className={classes.linkContainer}>
                        <a href="https://github.com/StudiousVanilla/drinkmxr" target="_blank" rel="noreferrer" className={classes.link}>
                            <GitHubIcon style={{fontSize:40}}/>
                        </a>
                        <a href="https://www.drinkmxr.com/" target="_blank" rel="noreferrer" className={classes.link}>
                            <ComputerTwoToneIcon style={{fontSize:40}}/>
                        </a>
                    </Box>
                </Box>
                <Box className={classes.imgContainer}>
                    <a href="https://www.drinkmxr.com/" target="_blank" rel="noreferrer" className={classes.link}>
                        <img src={DrinkMXR} alt="The Sounding Board Preview" className={classes.img}/>
                        <img src={DrinkMXRGif} alt="The Sounding Board Preview" className={classes.gif}/>
                    </a>
                </Box>
            </Box>
        </Box>
     );
}
 
export default DrinkMXRTab;