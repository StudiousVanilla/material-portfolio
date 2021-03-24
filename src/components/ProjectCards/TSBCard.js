import { Accordion, AccordionSummary, AccordionDetails, Box, Container, IconButton, makeStyles, Typography } from "@material-ui/core";
import clsx from 'clsx'
import test from './cardImgs/test.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
        marginRight: 0,
        justifyContent: 'space-between'   
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
        alignItems: 'center'
    },
    cardImg:{
        width: 500,
        height: 300
    },
    accordian:{
        width: '80%',
        marginTop: 10
    },
    linksBox:{
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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

const TSBCard = () => {

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
                </Typography>
            </Box>
            <Box className={clsx(classes.box, classes.boxRight)}>
                <Box className={clsx(
                    classes.boxItem, 
                    classes.imgAccordianContainer)}>
                    <img src={test} alt="doggie"
                    className={classes.cardImg}/>
                    <Accordion className={classes.accordian}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                            <Typography className={classes.heading}>
                                Technology Stack
                            </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita quae excepturi recusandae, incidunt id beatae fugiat aliquid. Cupiditate rem ex impedit saepe molestiae distinctio nesciunt aliquam minus optio corrupti! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique accusantium corporis culpa sequi aperiam laborum aliquid necessitatibus! Illum doloremque recusandae sequi, aliquam totam quod? Nihil voluptatem iure praesentium. Cumque, eligendi.
                            </Typography>
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
 
export default TSBCard;