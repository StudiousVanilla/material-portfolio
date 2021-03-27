import clsx from 'clsx'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Intro from './Intro'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: 100,
    marginTop: 100,
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
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
  return ['My Dev beginings', 'Learning', "What I'm doing now"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <Intro/>
      )
    case 1:
      return (
        <Intro/>
      );
    case 2:
      return (
        <Intro/>
      )
    default:
      return 'Unknown step';
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
        <Stepper alternativeLabel nonLinear activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const buttonProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepButton onClick={handleStep(index)} {...buttonProps}>
                  {label}
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
        <div>
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button 
              disabled={activeStep === 0} 
              onClick={handleBack} 
              className={clsx(classes.button, classes.tertiarybackground)}>
                <ArrowBackIcon/>
              </Button>
              <Button
              variant="contained"
              color="info"
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
