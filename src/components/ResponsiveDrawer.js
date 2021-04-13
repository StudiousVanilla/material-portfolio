import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PersonIcon from '@material-ui/icons/Person';


const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  drawer: {
    display: 'block',
    flexShrink: 0,
    width: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  appBar: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      position: 'absolute'
    },
    backgroundColor: '#303030',
    borderBottom: '1px solid #424242',
    boxShadow: 'none',
    // position is fixed when screen is small
    position: 'fixed',
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
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
      marginRight: 10,
      '& span, & svg': {
        fontSize: '1.3rem'
      }
    },
    sideList: {
      paddingRight: 35,
      paddingLeft: 35,
      marginTop: 15,
      marginBottom: 15,
  },
  tertiary:{
    color: theme.palette.info.main
  },
  link:{
    textDecoration: 'none',
    fontSize: 100,
    '&:hover':{
      textDecoration: 'none'
    }
  },
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
        {/* arrray of objects used in side bar */}
        {[{
          text: 'About', 
          link: 'about', 
          icon: <PersonIcon className={classes.tertiary} />
        },
        {
          text: 'Projects',
          link: 'projects',
          icon: <AccountTreeIcon color="secondary" />
        }, 
        {
        text: 'Contact',
        link: 'contact',
        icon: <PhoneAndroidIcon color="primary"/>
      }].map((object, index) => (
        
        <Link href={"#"+object.link} color="textPrimary" key={object.text} className={classes.link}>
          <ListItem 
            className={classes.sideList} 
            button 
            key={index} 
            onClick={autoCloseMobileDrawer}>
              {/* sets icons based on position in list */}
              <ListItemIcon className={classes.sideButtons}>
                  {object.icon}
              </ListItemIcon>
              <ListItemText className={classes.sideButtons}>
                  {object.text}
              </ListItemText>
            </ListItem>
          </Link>
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
      <nav className={classes.drawer}>
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
