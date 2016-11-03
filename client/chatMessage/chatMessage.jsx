import React from 'react';
import './chatMessage.scss';

export default class Message extends React.Component {
    render() {
        return (
            <div className = "chatMessage">
                <span>Crazy Cat</span>: Hi, I'm test comment!
            </div>
        );
    }
}