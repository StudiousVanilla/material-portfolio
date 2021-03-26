import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme)=>({
  container:{
    marginTop: 50
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
    }
}))

const ContactForm = () => {
  const classes = useStyles()


  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

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

        console.log()


    //   fetch('http://localhost:8000/notes', {
    //     method: 'POST',
    //     headers: {"Content-type": "application/json"},
    //     body: JSON.stringify({ title, details, category })
    //   }).then(() => history.push('/'))



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
      
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Name" 
          variant="outlined"
          fullWidth
          required
          autoComplete='off'
          error={titleError}/>
        <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Email Address" 
          variant="outlined"
          fullWidth
          required
          error={titleError}/>
        <TextField className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}/>
          

        <Button
            className={classes.tertiary}
            color='primary'
            type="submit"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}>
            Submit
        </Button>
      </form>

      
    </Container>
  )
}

export default ContactForm;
