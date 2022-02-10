import { Grid, makeStyles } from "@material-ui/core";
import html from '../stackIcons/html.svg'
import tailwindcss from '../stackIcons/tailwindcss.svg'
import javaScp from '../stackIcons/javascript.svg'
import react from '../stackIcons/react.svg'
import node from '../stackIcons/nodejs.svg'
import heroku from '../stackIcons/heroku.svg'
import netlify from '../stackIcons/netlify.svg'
import graphql from '../stackIcons/graphql.svg'

const useStlyes = makeStyles((theme)=>({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
      grid: {
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '110%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        },
      },
      gridItem:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {

        },
      },
      stackIcon:{
        maxWidth: 35,
        width: '60%',
        minWidth: 35,
        '&:hover': {
        transform: 'scale(1.1)',
        animation: 'shake 6s',
        animationIterationCount: 'infinite',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    }
    }
}));


const DrinkMXRstack = () => {

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
                    <img src={tailwindcss} title="Tailwind CSS" alt="Tailwind CSS"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={3} s={3} md={3} lg={3}>
                    <img src={javaScp} title="Javascript" alt="JavaScript"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={3} s={3} md={3} lg={3}>
                    <img src={react} title="React JS" alt="reactJS"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={3} s={3} md={3} lg={3}>
                    <img src={node} title="Node JS" alt="node"
                    className={classes.stackIcon}/>
                </Grid>
                <Grid item className={classes.gridItem}
                 xs={3} s={3} md={3} lg={3}>
                    <img src={graphql} title="GraphQL" alt="GraphQL"
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
 
export default DrinkMXRstack;