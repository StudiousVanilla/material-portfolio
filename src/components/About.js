import clsx from 'clsx'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import { Container, StepLabel } from '@material-ui/core';
import Learning from './AboutSteps/Learning'
import WebDev from './AboutSteps/WebDev'
import WhoAmI from './AboutSteps/WhoAmI'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CodeIcon from '@material-ui/icons/Code';

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .MuiSvgIcon-root':{
      fontSize: 40,
      marginTop: -5,
    }
  },
  active: {
    color: '#d500f9',
    '& .MuiSvgIcon-root':{
      fontSize: 45,
    }
  },
  completed: {
    color: '#d500f9'
  }
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <EmojiPeopleIcon />,
    2: <MenuBookIcon />,
    3: <CodeIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: 150,
    marginTop: 30
  },
  stepper:{
    backgroundColor: 'transparent',
  },
  stepButton:{
    '& .MuiStepButton-touchRipple':{
      color: 'transparent',
    }
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'flex',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  label:{
    '& .MuiStepLabel-labelContainer':{
      '& .MuiStepLabel-label':{
        fontSize: 18,
      }
    }
  },
  buttonContainer:{
    display: 'flex',
    justifyContent: 'center'
  },
  tertiary: {
    color: '#fefefe',
    backgroundColor: theme.palette.info.main
  },
  tertiarybackground: {
    '&:hover':{
      color: theme.palette.info.main
    }
  }
}));

function getSteps() {
  return ['Who Am I?', 'Learning to code', "Web Development"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <WhoAmI/>
      )
    case 1:
      return (
        <Learning/>
      );
    case 2:
      return (
        <WebDev/>
      )
    default:
      return 'fum';
  }
}

export default function About() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep = 
    isLastStep() ? 0 : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Container>
      <div className={classes.root}>
        <Stepper className={classes.stepper} alternativeLabel nonLinear activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const buttonProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepButton
                className={classes.stepButton}    
                onClick={handleStep(index)} 
                {...buttonProps}>
                  <StepLabel 
                  className={classes.label}  
                  StepIconComponent={ColorlibStepIcon}
                  typography='h1'>
                    {label}
                  </StepLabel>
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
        <div>
          <div>
            <Container className={classes.instructions}>
              {getStepContent(activeStep)}
            </Container>
            <div className={classes.buttonContainer}>
              <Button 
              disabled={activeStep === 0} 
              onClick={handleBack} 
              className={clsx(classes.button, classes.tertiarybackground)}>
                <ArrowBackIcon/>
              </Button>
              <Button
              variant="contained"
              onClick={handleNext}
              className={ clsx(classes.button, classes.tertiary)}>
                <ArrowForwardIcon/>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
