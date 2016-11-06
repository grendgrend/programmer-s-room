import React from 'react';
import styles from './chatForm.css';

export default class ChatForm extends React.Component {
    render() {
        return (
            <form className = { styles.chatForm }>
                <label> Write a message
                <textarea>

                </textarea>
                </label>
            </form>
        );
    }
}