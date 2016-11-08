import BaseComponent from '../baseComponent/baseCoponent';
import React from 'react';
import styles from './chat.css';
import ChatForm from '../chatForm/chatForm';
import Massage from '../chatMessage/chatMessage';

export default class Chat extends BaseComponent {
    render() {
        return (
            <div className = { styles.chat }>
                <Massage/>
                <Massage/>
                <Massage/>
                <ChatForm/>
            </div>
        );
    }
}