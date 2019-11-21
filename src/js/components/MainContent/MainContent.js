import React, { useEffect } from 'react'
import { useSelector, connect, useDispatch } from 'react-redux'

import UserPost from '../../common/UserPost/UserPost'
import './mainContent.css'
import { fetchPostsAction } from '../../redux/actions/userPostAction'


const MainContent = () => {
    const sampleState = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('component mounted')
        dispatch(fetchPostsAction())
        console.log('sample', sampleState.userPosts)
    }, [])

    return(
        <div className='mainContentContainer'>
            {sampleState.length > 0 ? console.log('loaded'): console.log('isLoading')}
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
            <UserPost />
        </div>

    )
}

export default connect(null, { fetchPostsAction })(MainContent)