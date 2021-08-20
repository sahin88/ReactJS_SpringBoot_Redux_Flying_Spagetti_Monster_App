import React,{useState} from 'react'
import Signin  from './Signin'
import Register  from './Register'
import ResetPassword  from './ResetPassword'
import '../css/main.css'
import { makeStyles, Button } from '@material-ui/core'


import LockOpenIcon from '@material-ui/icons/LockOpen';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import VpnLockIcon from '@material-ui/icons/VpnLock';
import Container from '@material-ui/core/Container'
import { green, purple } from '@material-ui/core/colors';
import '../css/signin.css'
const useStyles = makeStyles({


    containerMain: {
        backgroundColor:'#fff',
        border: '1px solid #ddd',
        padding:'10px',
        top:'0px',
        position:'relative',
        width:"420px",
        minHeight:"400px"
     
    }
})


function MainAuthentication() {
    const[ activePage, setActivePage]=useState('signin')
    const changeAction=(variable)=>{
        setActivePage(variable)

    }



    const classes= useStyles()
    return (
        <div className="signin">
            <div className="signin_button_group">
              <Button
              type="button"
              className="signin_button_group_buttons"
              style={{width:'90px'}}
                        color="primary"
                        variant="contained"
                        endIcon={<VpnKeyIcon />}
                        onClick={()=>(changeAction('signin'))}
                        >
                        Signin 
                    </Button>

                    <Button
                        type="button"
                        className="signin_button_group_buttons"
                        style={{backgroundColor: '#DB4437', color: '#FFFFFF'}}
                        variant="contained"
                        onClick={()=>(changeAction('register'))}
                        endIcon={<LockOpenIcon />}>
                        Register 
                    </Button>

                    <Button
                        type="button"
                        className="signin_button_group_buttons"
                        style={{backgroundColor: '#12824C', color: '#FFFFFF'}}
                        variant="contained"
                        onClick={()=>(changeAction('resetpass'))}
                        endIcon={<VpnLockIcon />}>
                        Reset Pass
                    </Button>
               
                    </div>

                    { activePage=='signin'?<Signin/>:activePage=='register'?<Register/>:<ResetPassword/>}
  
        </div>
    )
}

export default MainAuthentication
