import React from 'react'
import {Button} from 'reactstrap';
import './LoginBtn.css'
const LoginBtn = ({text='login', btnHandler, stylesClass}) => {
    return (
        <Button
            className={['loginBtn', stylesClass]}
            onClick={() => btnHandler()}
        >
            {text}
        </Button>
    )
}

export default LoginBtn
