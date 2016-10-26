import React from 'react';
import './chat.scss';
import ChatForm from '../chatForm/chatForm';

export default class Chat extends React.Component {
    render() {
        return (
            <div className="chat">
                <ChatForm/>
            </div>
        );
    }
}