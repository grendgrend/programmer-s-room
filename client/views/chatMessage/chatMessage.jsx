import React from 'react';
import BaseComponent from '../baseComponent/baseCoponent';
import styles from './chatMessage.css';

export default class Message extends BaseComponent {
    render() {
        return (
            <div className = { styles.chatMessage }>
                <span>Crazy Cat</span>: Hi, I'm test comment!
            </div>
        );
    }
}