import React from 'react'
import { Card, Button, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'
import './UserPost.css'

const UserPost = () => {
    return(
        <Card className='card'>
            <CardHeader>User ID: ???</CardHeader>
            <CardBody>
                <CardTitle>Title: ???</CardTitle>
                <Button >
                    <Link to='/posts' >details</Link>
                </Button>
            </CardBody>
        </Card>
    )
}

export default UserPost