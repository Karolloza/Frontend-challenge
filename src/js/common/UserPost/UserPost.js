import React from 'react'
import { Card, Button, CardHeader, CardBody, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'

import './UserPost.css'

const UserPost = ({ userId, title, postId, body }) => {
    return(
        <Card className='card'>
            <CardHeader>User ID: {userId}</CardHeader>
            <CardBody>
                <CardTitle>Title: {title}</CardTitle>
                <Button>
                    <Link
                        to={{
                            pathname: `/posts/${postId}`,
                            params: { userId, title, postId, body }
                        }}
                    >details
                    </Link>
                </Button>
            </CardBody>
        </Card>
    )
}

export default UserPost