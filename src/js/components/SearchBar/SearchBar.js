import React from 'react'
import { InputGroup, Input } from 'reactstrap'

import './SearchBar.css'


const SearchBar = () => {
    return (
        <InputGroup className='inputGroup'>
            <Input placeholder="search" />
        </InputGroup>
    )
}

export default SearchBar

