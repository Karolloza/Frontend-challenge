import React, { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import UserPost from '../../common/UserPost/UserPost'
import './mainContent.css'
import { fetchPostsAction } from '../../redux/actions/userPostAction'

const MainContent = ({ fetchPostsAction }) => {
    const postsData = useSelector(state => state.userPosts)
    const search = useSelector(state => state.searchValue.searchValue)

    useEffect(() => {
        fetchPostsAction()
    },[search])

    return(
        <div className='mainContentContainer'>
            {
                postsData.userPosts.length > 0 &&
                postsData.userPosts.filter(item =>
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
export default connect(null, { fetchPostsAction })(MainContent)