import React from 'react';
import { useSelector } from 'react-redux'
import './Layout.css';
import Notification from '../Notification/Notification'

const Layout = ({children}) => {
    let userNotification = useSelector(state => state.notification.notification)

    return (
        <div className='container'>
            {
                userNotification && <Notification
                    status={userNotification.status}
                    title={userNotification.title}
                    text={userNotification.text}
                    visible={userNotification.visible}
                />
            }
            {children}
        </div>
    )
}

export default Layout