import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    btn: {
        fontSize: 14,
        backgroundColor: 'blue',
        '&:hover': {
            background: 'white',
            color: 'blue'
        },
    },
    title: {
        textDecoration: 'underline',
        marginBottom: 20,
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    },
    container: {
        backgroundColor:'#fff',
        border: '1px solid #ddd',
        padding:'20px'

    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'space-evenly',
        background: '#f9f9f9',
        padding:'20px',
        border:'1px solid red'

    }
})

function ResetPassword() {

    const classes = useStyles()
  
    const [email, setEmail] = useState('')
   
    const [emailError, setEmailError] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
      
        setEmailError(false)

        if (email == '') {
            setEmailError(true)
        }
     
    
    }

    return (
        
            <Container maxWidth="xs" className={classes.container}>
                <Typography
                    variant="h6"
                    color="textSecondary"
                    component="h2"
                    gutterBottom
                >
                    Reset Password
                </Typography>

                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField className={classes.field}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Your Email Adress"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        error={emailError}
                    />

                   
                 

                    <Button
                        type="submit"
                        style={{backgroundColor: '#12824C', color: '#FFFFFF'}}
                        variant="contained"
                        endIcon={<SendIcon />}>
                        Reset Password
                    </Button>
                </form>


            </Container>


    )
}

export default ResetPassword