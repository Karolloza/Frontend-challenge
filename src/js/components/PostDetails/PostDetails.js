import React from 'react'
import LoginBtn from '../../common/LoginBtn/LoginBtn'
import './PostDetails.css'

const PostDetails = () => {
    return(
        <div>
            <LoginBtn text='Go back' stylesClass='return' />
            <h1>Details</h1>
            <div className='details'>
                <div>UserId: {'???'}</div>
                <div>Id: {'???'}</div>
                <div>Title: {'???'}</div>
                <p>Body: {'???'}</p>
            </div>
        </div>
    )
}

export default PostDetails