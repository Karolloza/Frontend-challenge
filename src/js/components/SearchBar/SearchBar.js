import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { InputGroup, Input } from 'reactstrap'
import { searchValueAction } from '../../redux/actions/searchAction'
import './SearchBar.css'

const SearchBar = () => {
    const dispatch = useDispatch()
    const inputValue = useSelector(state => state.searchValue.searchValue)

    return (
        <InputGroup className='inputGroup'>
            <Input
                placeholder="search"
                value={inputValue}
                onChange={(e) =>
                dispatch(searchValueAction(e.target.value))}
            />
        </InputGroup>
    )
}

export default SearchBar

