import { Grid, makeStyles } from "@material-ui/core";
import html from '../stackIcons/html.svg'
import css from '../stackIcons/css.svg'
import javaScp from '../stackIcons/javascript.svg'
import react from '../stackIcons/react.svg'
import firebase from '../stackIcons/firebase.svg'
import node from '../stackIcons/nodejs.svg'
import heroku from '../stackIcons/heroku.svg'
import netlify from '../stackIcons/netlify.svg'

const useStlyes = makeStyles((theme)=>({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      grid: {
        width: '100%',
        height: '100%',
      },
      gridItem:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      stackIcon:{
          width: '60%'
      }
}));


const TSBstack = () => {

    const classes = useStlyes();

    return ( 
            <Grid container className={classes.grid}
            spacing={3}>
                <Grid item className={classes.gridItem}
                 xs={12} s={12} md={12} lg={3}>
                    <img src={html} alt="html"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={12} s={12} md={12} lg={3}>
                    <img src={css} alt="css"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={12} s={12} md={12} lg={3}>
                    <img src={javaScp} alt="javaScp"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={12} s={12} md={12} lg={3}>
                    <img src={react} alt="reactJS"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={12} s={12} md={12} lg={3}>
                    <img src={firebase} alt="firebase"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={12} s={12} md={12} lg={3}>
                    <img src={node} alt="node"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={12} s={12} md={12} lg={3}>
                    <img src={heroku} alt="heroku"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={12} s={12} md={12} lg={3}>
                    <img src={netlify} alt="netlify"
                    className={classes.stackIcon}/>
                </Grid>
            </Grid>
     );
}
 
export default TSBstack;