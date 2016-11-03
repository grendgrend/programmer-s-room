import React from 'react';
import './chat.scss';
import ChatForm from '../chatForm/chatForm';
import Massage from '../chatMessage/chatMessage';

export default class Chat extends React.Component {
    render() {
        return (
            <div className = "chat">
                <ChatForm/>
                <Massage/>
                <Massage/>
                <Massage/>
            </div>
        );
    }
}