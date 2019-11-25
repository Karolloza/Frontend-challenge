import React from 'react'
import { Alert } from 'reactstrap';
import './Notifivation.css'


const Notification = ({status, title, text, visible}) => {
    return (
        <div className='notificationContainer'>
            {
                visible &&
                <Alert color={status}>
                    <h4>{title}</h4>
                    <hr/>
                    <p>{text}</p>
                </Alert>
            }
        </div>
    )
}

export default Notification