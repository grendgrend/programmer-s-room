import React from 'react';
import './chatForm.scss';

export default class ChatForm extends React.Component {
    render() {
        return (
            <form className="chatForm">
                <label> Write a message
                <textarea>

                </textarea>
                </label>
            </form>
        );
    }
}