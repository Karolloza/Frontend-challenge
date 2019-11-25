import React, {useEffect} from 'react'
import {connect, useSelector} from 'react-redux'
import { fetchPostDetails } from '../../redux/actions/userPostAction.js'
import LoginBtn from '../../common/LoginBtn/LoginBtn'

import './PostDetails.css'

const PostDetails = ({ fetchPostDetails, ...props }) => {
    const { userId, id, title, body } = useSelector( state => state.userPosts.postDetails)

    useEffect(() => {
        fetchPostDetails(window.location.pathname)
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

export default connect(null, {fetchPostDetails})(PostDetails)