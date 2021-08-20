import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
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

function Form() {

    const classes = useStyles()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [category, setCategory] = useState('money')
    const [subjectError, setSubjectError] = useState(false)
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        setNameError(false)
        setEmailError(false)

        if (name == '') {
            setNameError(true)
        }
        if (message == '') {
            setEmailError(true)
        }
        if (name && email) {
            console.log("sending .....")
            fetch('http://localhost:8000/creates', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ name, email, subject, category })
            }).then(() => history.push('/'))
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
                    Send us your  Message
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
                        onChange={(e) => setSubject(e.target.value)}
                        label="Subject"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        required
                        error={subjectError}
                    />

                    <TextField className={classes.field}
                        onChange={(e) => setMessage(e.target.value)}
                        label="Messages"
                        variant="outlined"
                        color="secondary"
                        multiline
                        rows={4}
                        fullWidth
                        required
                        error={messageError}
                    />

                    <FormControl className={classes.field}>
                        <FormLabel>Please Select a Category</FormLabel>
                        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                            <FormControlLabel value="job" control={<Radio />} label="Job" />
                            <FormControlLabel value="application" control={<Radio />} label="Application" />
                            <FormControlLabel value="demand" control={<Radio />} label="Demand" />
                            <FormControlLabel value="work" control={<Radio />} label="Work" />
                        </RadioGroup>
                    </FormControl>


                    <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                        endIcon={<SendIcon />}>
                        Submit
                    </Button>
                </form>


            </Container>


    )
}

export default Form