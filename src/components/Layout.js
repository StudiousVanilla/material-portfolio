import ResponsiveDrawer from './ResponsiveDrawer';
import Link from '@material-ui/core/Link';
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root:{
        display: 'flex'
    },
    mainContent:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    link:{
      textDecoration: 'none',
      '&:hover':{
        textDecoration: 'none'
      }
    },
  }));

const Layout = () => {

    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <ResponsiveDrawer/>
            <Box className={classes.mainContent}>
                <Intro/>
                <Link className={classes.link} id="about">
                    <About/>
                </Link>
                <Link className={classes.link} id="projects"> 
                    <Projects/>
                </Link>
                <Link className={classes.link} id="contact"> 
                    <Contact/>
                </Link>
            </Box>
        </div>
     );
}
 
export default Layout;