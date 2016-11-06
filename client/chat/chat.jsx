import React from 'react';
import styles from './chat.css';
import ChatForm from '../chatForm/chatForm';
import Massage from '../chatMessage/chatMessage';

export default class Chat extends React.Component {
    render() {
        return (
            <div className = { styles.chat }>
                <ChatForm/>
                <Massage/>
                <Massage/>
                <Massage/>
            </div>
        );
    }
}