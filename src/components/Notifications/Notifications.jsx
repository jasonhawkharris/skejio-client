import React from 'react';
import { useRecoilValue } from 'recoil';
import { Button, Icon } from 'semantic-ui-react';
import { userState } from '../../recoil/atoms';

import './Notifications.css';


const Notifications = props => {
    const user = useRecoilValue(userState);
    const data = user.notifications;
    console.log(data);

    const generateNotifications = () => {
        return data.map(notification => {
            return (
                <div className="noti">
                    {notification.invite &&
                        <div className="header-icon">
                            <i className="handshake icon"></i>
                        </div>
                    }
                    <div>
                        <div className="message">
                            {notification.message}
                        </div>
                        {notification.invite &&
                            <div className="invite-actions">
                                <button className="approve">Approve</button>
                                &nbsp;|&nbsp;
                                <button className="reject">Reject</button>
                            </div>
                        }
                    </div>
                </div>
            );
        });
    }

    return (
        <div id="notifications" className="ui raised segment">
            <div className="header">
                <h5>Notifications</h5>
            </div>
            <div className="nList">
                {data ? (
                    generateNotifications()
                ) : (
                        <p>You have no notifications</p>
                    )}
            </div>
        </div>
    )
}

export default Notifications;

