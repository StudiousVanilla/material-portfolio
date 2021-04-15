import clsx from 'clsx'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

const useStyles = makeStyles((theme)=>({
  container:{
    position: 'relative',
    marginTop: 50
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
    },
  button:{
    fontSize: '1.5rem'
  },
  formMessage:{
    position: 'absolute',
    bottom: -100,
    width: 400
  }
}))

const ContactForm = () => {
  const classes = useStyles()


  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [formMessage, setFormMessage] = useState('')


  // sends a POST request to mail server using form data
  const postMessage = async (formData) =>{

    setFormMessage({message: 'Sending...'})

    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        // parse formData into a JSON object
        body: JSON.stringify(formData)
    };
    try {
        const response = await fetch('http://localhost:3000/', requestOptions)

        // response will be a success or error message
        const data = await response.json()

        // sets formMessage state to response (positive or negative)
        setFormMessage(data)
        
    } catch (error) {
        console.log(error);
        // sets formMessage state due to error

        setTimeout(()=>{
            setFormMessage({message: "There was a probelm sending your message. Please refresh the page and try again"})}, 5000 )
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)
    if (title === '') {
      setTitleError(true)
    }
    if (details === '') {
      setDetailsError(true)
    }
    if (title && details) {

      // grabs data from form and puts into formData object
      const form = document.getElementById('contactForm')
      let formData = {
          name: form.name.value, 
          email: form.email.value, 
          details: form.details.value
      }

      postMessage(formData)

    } 
  }




  return (
    <Container size="m" className={classes.container}>
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom>
        Leave me a message
      </Typography>
      
      <form noValidate autoComplete="off" onSubmit={handleSubmit} className={classes.form} id="contactForm">
        <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Name" 
          variant="outlined"
          fullWidth
          required
          autoComplete='off'
          name="name"
          error={titleError}
          // font size of input 
          />
        <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Email Address" 
          variant="outlined"
          fullWidth
          required
          name="email"
          error={titleError}
          />
        <TextField className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          name="details"
          error={detailsError} 
          />
          

        <Button
            className={ clsx(classes.tertiary, classes.button)}
            color='primary'
            type="submit"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />} >
            Submit
        </Button>
      </form>

      <Typography
      variant="h6" 
      color="textSecondary"
      component="h3"
      gutterBottom
      className={classes.formMessage}>
        {formMessage.message}
      </Typography>


      
    </Container>
  )
}

export default ContactForm;
