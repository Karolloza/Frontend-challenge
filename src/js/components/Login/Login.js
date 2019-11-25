import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { showNotification, hideNotification } from '../../redux/actions/notificationAction'

import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const auth = sessionStorage.getItem('auth')
    const dispatch = useDispatch()


    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const validate = () => {
        const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        if(username.length < 5) {
            setUsernameError('username must be at least 5 characters long')
            return false
        }
        else if (!validPassword.test(password)) {
            setPasswordError('password must be at least 8 characters long, contain at least one small letter, one capital letter and one number ')
            return false
        } else {
            return true
        }

    }

    const submitForm = (e) => {
        setUsernameError('')
        setPasswordError('')
        e.preventDefault()
        const isValid = validate()
        if(isValid) {

            sessionStorage.setItem('auth', true)
            sessionStorage.setItem('userId', Math.floor((Math.random() * 10) + 1))
            dispatch(showNotification(
                'success',
                'Success!',
                'You successfully logged in !',
                true
            ))
            setTimeout(() => {
                dispatch(hideNotification())
                //TODO: replace redirect
                window.open('/', '_self')
            },2000)
        } else {
            sessionStorage.setItem('auth', false)
        }
    }






    useEffect(() => {
        if(JSON.parse(sessionStorage.getItem('auth'))) {
            return <Route render={() => <Redirect from='/login' to='/'  /> } />

        }
    }, [auth])



    return(

        <div class='loginContainer'>
            <h1>Login</h1>
            <form onSubmit={(e) => submitForm(e)}>
                <input type='text' placeholder='username' name='username' value={username} onChange={(e) => handleUsername(e)}/>
                <div className='error'>{usernameError}</div>
                <br />
                <input type='password' placeholder='password' name='password' value={password} onChange={(e) => handlePassword(e)}/>
                <div className='error'>{passwordError}</div>
                <br />
                <input type='submit' value='Login' />
            </form>
        </div>

    )
}

export default Login