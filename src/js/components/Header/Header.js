import React from 'react'
import { Link } from 'react-router-dom'
import LoginBtn from '../../common/LoginBtn/LoginBtn'
import SearchBar from '../../components/SearchBar/SearchBar.js'

import './Header.css'

const Header = () => {
    const handleLogin = () => {
        sessionStorage.setItem('auth', JSON.stringify(false))
    }

    return(
        <div className='headerContainer'>
            <Link to='/login'>
                <LoginBtn btnHandler={handleLogin} text='Logout'/>
            </Link>
            <SearchBar />
        </div>
    )
}

export default Header