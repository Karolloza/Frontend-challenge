import React from 'react'
import { Card, Button, CardHeader, CardBody, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'
import './UserPost.css'

const UserPost = ({ userId, title, postId, body }) => {
    return(
        <Card className='card'>
            <CardHeader><b>User ID:</b>{userId}</CardHeader>
            <CardBody>
                <CardTitle><b>Title:</b>{title}</CardTitle>
                    <Link
                        to={{
                            pathname: `/posts/${postId}`,
                            params: { userId, title, postId, body }
                        }}
                    >
                        <Button>details</Button>
                    </Link>

            </CardBody>
        </Card>
    )
}

export default UserPost