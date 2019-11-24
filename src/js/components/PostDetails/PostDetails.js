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
        <div>
            <LoginBtn text='Go back' stylesClass='return' btnHandler={() => props.history.goBack()}/>
            <h1>Details</h1>
            <div className='details'>
                <div>UserId: {userId}</div>
                <div>Id: {id}</div>
                <div>Title: {title}</div>
                <p>Body: {body}</p>
            </div>
        </div>
    )
}

export default connect(null, {fetchPostDetails})(PostDetails)