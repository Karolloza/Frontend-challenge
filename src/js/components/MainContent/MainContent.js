import React, { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import UserPost from '../../common/UserPost/UserPost'
import { fetchPosts } from '../../../store'
import './mainContent.less'

const MainContent = ({ fetchPosts }) => {
    const postsData = useSelector(state => state.userPosts)
    const filteredByUserId = postsData.userPosts.filter(post => post.userId === parseInt(sessionStorage.getItem('userId')))
    const search = useSelector(state => state.searchValue.searchValue)

    useEffect(() => {
        fetchPosts()
    },[])

    return(
        <div className='mainContentContainer'>
            {
                postsData.userPosts.length > 0 &&
                filteredByUserId.filter(item =>
                    item.body.indexOf(search) !== -1 ||
                    item.title.indexOf(search) !== -1 ).map(post =>
                <UserPost
                    userId={post.userId}
                    title={post.title}
                    postId={post.id}
                    body={post.body}
                    key={post.id}
                />) || <div>loading</div>}
        </div>
    )
}
export default connect(null, { fetchPosts })(MainContent)