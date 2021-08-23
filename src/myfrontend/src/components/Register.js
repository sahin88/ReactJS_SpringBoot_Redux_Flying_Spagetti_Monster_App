import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core'

import { useHistory } from 'react-router-dom'

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

function Register() {

    const classes = useStyles()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [repasswordError, setRePasswordError] = useState(false)

    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        setNameError(false)
        setEmailError(false)
        setPasswordError(false)
        setRePasswordError(false)

        if (name == '') {
            setNameError(true)
        }
        if (email == '') {
            setEmailError(true)
        }

        if (password == '') {
            setEmailError(true)
        }
        if (password == '') {
            setEmailError(true)
        }

        if (password !== repassword) {
            setPasswordError(true)
            setRePasswordError(true)
        }
        if (name && email &&password &&repassword) {
          
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
                    Create a New Note
                </Typography>

                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField className={classes.field}
                        onChange={(e) => setName(e.target.value)}
                        label="Your Full Name"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        error={nameError}
                    />

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
                        label="Password"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        error={passwordError}
                    />

                    <TextField className={classes.field}
                        onChange={(e) => setRePasswordError(e.target.value)}
                        label="Repassword"
                        variant="outlined"
                        color="secondary"
                     
                        fullWidth
                        required
                        error={repasswordError}
                    />

               
                    <Button
                        type="submit"
                        style={{backgroundColor: '#DB4437', color: '#FFFFFF'}}
                        variant="contained"
                        endIcon={<SendIcon />}>
                        Register
                    </Button>
                </form>


            </Container>


    )
}

export default Register