import { Accordion, AccordionSummary, AccordionDetails, Box, Container, IconButton, makeStyles, Typography } from "@material-ui/core";
import clsx from 'clsx'
import tsbGif from './tsbgif.gif'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TSBstack from './TSBstack'
import GitHubIcon from '@material-ui/icons/GitHub';
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex'
      },
    box:{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 20
    },
    boxRight:{
        justifyContent: 'space-between',   
        marginRight: 0,
    },
    boxItem:{
        marginBottom: 20,
        marginTop: 10,
        paddingBottom: 10,
        paddingTop: 10
    },
    title:{
        borderBottom: `1px dotted ${theme.palette.secondary.main}`
    },
    imgAccordianContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 0
    },
    cardImg:{
        width: 500,
        height: 250
    },
    accordian:{
        width: '80%',
        marginTop: 20,
        borderTop: `1px solid #424242`,
        '&:before': {
            display: 'none',
        }
    },
    accordianSummary:{
        boxShadow: 'none',
        border: 'none'
    },
    accordianDetails:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    linksBox:{
        width: '65%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 9,
        borderTop: `1px dotted ${theme.palette.secondary.main}`
    },
    iconBtn:{
        borderBottom:  `1px solid #424242`,
        borderRadius: 0,
        '&:hover':{
            color: theme.palette.secondary.dark,
            backgroundColor: '#424242',
            borderBottom:  `1px solid #5d5d5d`
        }
    },
    linkIcons:{
        marginTop: 15,
        paddingBottom: 10,
        fontSize: 50,
        backgroundColor: 'transparent',
    }
}));

const TSBCardGif = () => {

    const classes = useStyles();

    return ( 
        <Container className={classes.container}>
            <Box className={classes.box}>
                <Typography 
                    variant ='h1'
                    className= {clsx(classes.boxItem, classes.title)}>
                    The Sounding Board
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus placeat ex corrupti esse nihil molestiae maxime impedit, possimus voluptatum explicabo, vero fugit odio enim est quo, facilis id quia quasi.
                    <br/> <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsum nihil, est cumque doloremque blanditiis quaerat consequuntur vitae, reprehenderit quisquam facere asperiores dignissimos recusandae saepe doloribus? Iusto maiores magni consequatur.
                    <br/><br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus placeat ex corrupti esse nihil molestiae maxime impedit, possimus voluptatum explicabo, vero fugit odio enim est quo, facilis id quia quasi.
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus placeat ex corrupti esse nihil molestiae maxime impedit, possimus voluptatum explicabo, vero fugit odio enim est quo, facilis id quia quasi.
                    <br/> <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsum nihil, est cumque doloremque blanditiis quaerat consequuntur vitae, reprehenderit quisquam facere asperiores dignissimos recusandae saepe doloribus? Iusto maiores magni consequatur.
                </Typography>
            </Box>
            <Box className={clsx(classes.box, classes.boxRight)}>
                <Box className={clsx(
                    classes.boxItem, 
                    classes.imgAccordianContainer)}>
                    <img src={tsbGif} alt="doggie"
                    className={classes.cardImg}/>
                    <Accordion className={classes.accordian}>
                        <AccordionSummary
                        className={classes.accordianSummary}
                        expandIcon={<ExpandMoreIcon 
                        style={{color:'#1de9b6'}}/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                            <Typography className={classes.heading}>
                                Technology Stack
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accordianDetails}>
                            <TSBstack/> 
                        </AccordionDetails>
                    </Accordion>
                </Box>
                <Box className={ clsx(classes.boxItem, classes.linksBox)}>
                    <IconButton className={classes.iconBtn}>
                        <GitHubIcon className={classes.linkIcons}/>
                    </IconButton>
                    <IconButton className={classes.iconBtn}>
                        <ComputerTwoToneIcon className={classes.linkIcons}/>
                    </IconButton>
                </Box>
            </Box>
        </Container>
     );
}
 
export default TSBCardGif;