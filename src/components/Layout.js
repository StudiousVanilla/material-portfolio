import ResponsiveDrawer from './ResponsiveDrawer';
import Link from '@material-ui/core/Link';
import Intro from './Intros/Intro'
import MobileIntro from './Intros/MobileIntro'
import QuickBtns from './QuickBtns'
import About from './About'
import Projects from './Projects'
import ProjectsTablet from './ProjectsTablet'
import Contact from './Contact'
import Footer from './Footer/Footer'
import { Box, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        backgroundColor: '#272727',
    },
    mainContent:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    link:{
        visibility: 'hidden',
        textDecoration: 'none',
        '&:hover':{
            textDecoration: 'none'
      }
    }
}));

const Layout = () => {

    const classes = useStyles();


    return ( 
        <div className={classes.root}>
            <ResponsiveDrawer/>
            <QuickBtns/>
            <Box className={classes.mainContent}>
                <MobileIntro/>
                <Intro/>
                <Link className={classes.link} id="about">
                    about
                </Link>
                <About/>
                <Link className={classes.link} id="projects"> 
                    projects
                </Link>
                <Projects/>
                <ProjectsTablet/>
                <Link className={classes.link} id="contact"> 
                    contact
                </Link>
                    <Contact/>
                <Footer/>
            </Box>
        </div>
     );
}
 
export default Layout;