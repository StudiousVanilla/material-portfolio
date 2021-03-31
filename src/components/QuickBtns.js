import clsx from 'clsx'
import { Box, makeStyles } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PersonIcon from '@material-ui/icons/Person';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        backgroundColor: '#303030',
    },
    quickBtns:{
        position: 'fixed',
        top: 50,
        left: -100,
        display:'flex',
        flexDirection: 'column',
    },
    quickBtn:{
        fontSize: 60,
        marginBottom: 30,
        transition: '3s',
        '&:hover':{
            transform: 'scale(1.05)'
        }
    },
    tertiary:{
        color: theme.palette.info.main
    },
  }));

const QuickBtns = () => {

    const classes = useStyles();
    const [yScroll, setYScroll] = useState(0);

    const handleQuickBox = () =>{
        const quickBox = document.getElementById("quickBox");
        if(yScroll < 700){
            quickBox.style.transition = '1s'
            quickBox.style.left = '-100px'
        }
        else{
            quickBox.style.left = '20px'
        }
    }

    const myScrollFunc = () => {
        let y = window.scrollY;
        setYScroll(y)
        handleQuickBox()
    };

    window.addEventListener("scroll", myScrollFunc);


    return ( 
        <Box className={classes.quickBtns} id="quickBox">
            <Link href='#about'>
                <PersonIcon 
                className={clsx(classes.quickBtn, classes.tertiary)}/>
            </Link>
            <Link href='#projects'>
                <AccountTreeIcon className={classes.quickBtn} 
                color="secondary"/>
            </Link>
            <Link href='#contact'>
                <PhoneAndroidIcon className={classes.quickBtn}
                color="primary"/>
            </Link>
        </Box>
    );
}
 
export default QuickBtns;