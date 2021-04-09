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
        maxWidth: 35,
        width: '60%',
        minWidth: 35,
        '&:hover': {
        transform: 'scale(1.1)',
        animation: 'shake 6s',
        animationIterationCount: 'infinite',
        }
    }
}));


const TSBstack = () => {

    const classes = useStlyes();

    return ( 
            <Grid container className={classes.grid}
            spacing={3}>
                <Grid item className={classes.gridItem}
                 xs={3} s={3} md={3} lg={3}>
                    <img src={html} title="html" alt="html"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={3} s={3} md={3} lg={3}>
                    <img src={css} title="css" alt="css"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={3} s={3} md={3} lg={3}>
                    <img src={javaScp} title="Javascript" alt="javaScp"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={3} s={3} md={3} lg={3}>
                    <img src={react} title="React JS" alt="reactJS"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={3} s={3} md={3} lg={3}>
                    <img src={firebase} title="Google Firebase" alt="firebase"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={3} s={3} md={3} lg={3}>
                    <img src={node} title="Node JS" alt="node"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={3} s={3} md={3} lg={3}>
                    <img src={heroku} title="Heroku" alt="heroku"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={3} s={3} md={3} lg={3}>
                    <img src={netlify} title="Netlify" alt="netlify"
                    className={classes.stackIcon}/>
                </Grid>
            </Grid>
     );
}
 
export default TSBstack;