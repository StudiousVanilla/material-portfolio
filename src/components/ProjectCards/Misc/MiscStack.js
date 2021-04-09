import { Box, Grid, makeStyles } from "@material-ui/core";
import babel from '../stackIcons/babel.svg'
import jest from '../stackIcons/jest.svg'
import jwt from '../stackIcons/jwt.svg'
import mongodb from '../stackIcons/mongodb.svg'
import nodemon from '../stackIcons/nodemon.svg'
import passportjs from '../stackIcons/passportjs.png'
import vuejs from '../stackIcons/vuejs.svg'
import webpack from '../stackIcons/webpack.svg'
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
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      middleItem:{
        justifyContent: 'space-around',
      },
      iconBox:{
        width: '33%',
        maxWidth: 100,
        height: '15%',
        maxHeight: 55,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      stackIcon:{
        height: '75%',
        opacity: '0.15',
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
            spacing={5}>

                <Grid item className={classes.gridItem}
                    xs={3} s={3} md={3} lg={3}>
                    
                    <Box className={classes.iconBox}>
                        <img src={babel} title="babel" alt="babel"
                        className={classes.stackIcon}/>
                    </Box>  
                    <Box className={classes.iconBox}>
                        <img src={css} title="css" alt="css"
                        className={classes.stackIcon}/>
                    </Box>
                    <Box className={classes.iconBox}>
                        <img src={firebase} title="Google Firebase" alt="firebase"
                        className={classes.stackIcon}/>
                    </Box>
                    <Box className={classes.iconBox}>
                        <img src={heroku} title="Heroku" alt="heroku"
                        className={classes.stackIcon}/>
                    </Box>
                </Grid>


                <Grid item className={classes.gridItem}
                    xs={3} s={3} md={3} lg={3}>
                    <Box className={classes.iconBox}>
                        <img src={html} title="html" alt="html"
                        className={classes.stackIcon}/>
                    </Box>
                    <Box className={classes.iconBox}>
                        <img src={javaScp} title="Javascript" alt="javaScp"
                        className={classes.stackIcon}/>
                    </Box>
                    <Box className={classes.iconBox}>
                        <img src={jest} title="jest" alt="jest"
                        className={classes.stackIcon}/>
                    </Box>
                    <Box className={classes.iconBox}>
                        <img src={vuejs} title="vuejs" alt="vuejs"
                        className={classes.stackIcon}/>
                    </Box> 
                </Grid>


                {/* <Grid item className={clsx(classes.gridItem, classes.middleItem)}
                    xs={4} s={4} md={4} lg={4}>
                    <Box>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere corporis voluptas qui magni error, dolor exercitationem deleniti aperiam corrupti, maxime nobis assumenda, eos amet quia ab placeat suscipit ex.
                    </Box>   
                </Grid> */}



                <Grid item className={classes.gridItem}
                    xs={3} s={3} md={3} lg={3}>

                    <Box className={classes.iconBox}>
                        <img src={jwt} title="jwt" alt="jwt"
                        className={classes.stackIcon}/>
                    </Box>
                    <Box className={classes.iconBox}>
                        <img src={mongodb} title="mongodb" alt="mongodb"
                        className={classes.stackIcon}/>
                    </Box>
                    <Box className={classes.iconBox}>
                        <img src={netlify} title="Netlify" alt="netlify"
                        className={classes.stackIcon}/>
                    </Box>
                    <Box className={classes.iconBox}>
                        <img src={node} title="Node JS" alt="node"
                        className={classes.stackIcon}/>
                    </Box>
                </Grid>

                <Grid item className={classes.gridItem}
                    xs={3} s={3} md={3} lg={3}>

                    <Box className={classes.iconBox}>
                        <img src={nodemon} title="nodemon" alt="nodemon"
                        className={classes.stackIcon}/>
                    </Box>
                    <Box className={classes.iconBox}>
                        <img src={passportjs} title="passportjs" alt="passportjs"
                        className={classes.stackIcon}/>
                    </Box>
                    <Box className={classes.iconBox}>
                        <img src={react} title="React JS" alt="reactJS"
                        className={classes.stackIcon}/>
                    </Box>
                    <Box className={classes.iconBox}>
                        <img src={webpack} title="webpack" alt="webpack"
                        className={classes.stackIcon}/>
                    </Box>   
                </Grid>

              

            </Grid>
     );
}
 
export default TSBstack;