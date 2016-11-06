import React from 'react';
import styles from './chatMessage.css';

export default class Message extends React.Component {
    render() {
        return (
            <div className = { styles.chatMessage }>
                <span>Crazy Cat</span>: Hi, I'm test comment!
            </div>
        );
    }
}