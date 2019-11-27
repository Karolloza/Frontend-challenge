import React, {useEffect} from 'react'
import {connect, useSelector} from 'react-redux'
import { fetchDetails } from '../../../store.js'
import LoginBtn from '../../common/LoginBtn/LoginBtn'

import './PostDetails.css'

const PostDetails = ({ fetchDetails, ...props }) => {
    const { userId, id, title, body } = useSelector( state => state.userPosts.postDetails)

    useEffect(() => {
        fetchDetails(window.location.pathname)
    }, [])
    return(
        <div className='postDetailsContainer'>
            <LoginBtn text='Go back' stylesClass='goBack' btnHandler={() => props.history.goBack()}/>
            <h1>Details</h1>
            <div className='details'>
                <div><b>UserId:</b> {userId}</div>
                <div><b>Id:</b> {id}</div>
                <div><b>Title:</b> {title}</div>
                <p><b>Body:</b> {body}</p>
            </div>
        </div>
    )
}

export default connect(null, { fetchDetails })(PostDetails)