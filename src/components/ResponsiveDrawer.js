import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import CodeIcon from '@material-ui/icons/Code';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import About from './About'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      position: 'absolute'
    },
    // position is fixed when screen is small
    position: 'fixed'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    alignItems: 'center',
    overflowX: 'hidden'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sideButtons: {
      minWidth: 0,
      marginRight: 10
  },
  sideList: {
    paddingRight: 35,
    paddingLeft: 35,
    marginTop: 15,
    marginBottom: 15,
  }
}));



function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const autoCloseMobileDrawer = () =>{
      if(mobileOpen){
        handleDrawerToggle()
      }
  }


  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List className={classes.sideList}>
        {
        [{text: 'About', link: 'about', 
        icon: <SentimentSatisfiedAltIcon color="primary"/>}, 
        {text: 'Projects', link: 'projects', 
        icon: <CodeIcon color="primary"/>}, 
        {text: 'Contact', link: 'contact', 
        icon: <PhoneIcon color="primary"/>}].map((object, index) => (
          <ListItem className={classes.sideList} button 
          key={index} onClick={autoCloseMobileDrawer}>
              {/* sets icons based on position in list */}
            <ListItemIcon className={classes.sideButtons}>
                {object.icon}
            </ListItemIcon>
            <ListItemText>
                <Link href={"#"+object.link} color="textPrimary">{object.text}</Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Oisín Byrne
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <About/>
        <Typography>
            <Link id="projects">
                Projects
            </Link>
        </Typography>
        <Typography>
            <Link id="about">
                About
            </Link>
        </Typography>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
