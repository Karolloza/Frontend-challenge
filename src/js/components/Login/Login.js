import React, { useState, useEffect } from 'react'
import { Redirect, Link, Route } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const auth = JSON.parse(sessionStorage.getItem('auth'))

    const handleUsername = (e) => {
        setUsername(e.target.value)

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        if(username && password) {
            sessionStorage.setItem('auth', JSON.stringify(true))
            //TODO: replace redirect
            window.open('/', '_self')
                    // return <Route render={() => <Redirect to='/'  /> } />
        } else {
            sessionStorage.setItem('auth', JSON.stringify(false))
        }

    }
    useEffect(() => {
        if(JSON.parse(sessionStorage.getItem('auth'))) {
            return <Route render={() => <Redirect from='/login' to='/'  /> } />
        }
    }, [auth])



    return(

        <div>
            <div>login</div>
            <form onSubmit={(e) => submitForm(e)}>
                <input type='text' placeholder='username' name='username' value={username} onChange={(e) => handleUsername(e)}/>
                <br />
                <input type='password' placeholder='password' name='password' value={password} onChange={(e) => handlePassword(e)}/>
                <br />
                <input type='submit' />

            </form>
        </div>

    )
}

export default Login