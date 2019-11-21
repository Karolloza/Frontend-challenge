import React from 'react'
import LoginBtn from '../../common/LoginBtn/LoginBtn'
import SearchBar from '../../components/SearchBar/SearchBar.js'

import './Header.css'

const Header = () => {
    const handleLogin = () => {
        console.log('logged in')
    }
    return(
        <div className='headerContainer'>
            <LoginBtn btnHandler={handleLogin}/>
            <SearchBar />
        </div>
    )
}

export default Header