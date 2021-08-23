import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import {GrUserAdmin} from 'react-icons/gr'

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
      
        padding:'20px',
   
        position:'relative',
        border:'1px solid #ddd'

    },


    container_main:{
        border: '1px solid #ddd',
        height:'500px'

    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'space-evenly',
        background: '#f9f9f9',
        padding:'20px',
        border:'1px solid red'

    }
})

function Signin() {

    const classes = useStyles()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    
    const [passwordError, setPasswordError] = useState(false)
    const [emailError, setEmailError] = useState(false)
  

    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        setPasswordError(false)
        setEmailError(false)

        if (email == '') {
            setEmailError(true)
        }
        if (password == '') {
            setPasswordError(true)
        }
        if (password && email) {
            console.log("sending .....")
           
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
                    Sign In
                </Typography>

                <form noValidate autoComplete="off" onSubmit={handleSubmit}>

                <TextField className={classes.field}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        error={emailError}
                    />
                    <TextField className={classes.field}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Your Password"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        error={passwordError}
                    />
                    <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                        endIcon={<SendIcon />}>
                        LOGIN
                    </Button>

                    <Button
                        type="button"
            
                        style={{backgroundColor: '#ffe000', color: '#DB4437'}}
                        variant="contained"
                     
                        endIcon={<GrUserAdmin style={{color:'#FFFFFF'}} />}>
                       Admin
                    </Button>
                </form>


            </Container>
    


    )
}

export default Signin;