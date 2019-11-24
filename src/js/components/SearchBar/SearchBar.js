import React from 'react'
import {useDispatch} from 'react-redux'
import { InputGroup, Input } from 'reactstrap'
import { searchValueAction } from '../../redux/actions/searchAction'

import './SearchBar.css'


const SearchBar = () => {
    const dispatch = useDispatch()

    return (
        <InputGroup className='inputGroup'>
            <Input
                placeholder="search"
                onChange={(e) =>
                dispatch(searchValueAction(e.target.value))}
            />
        </InputGroup>
    )
}

export default SearchBar

