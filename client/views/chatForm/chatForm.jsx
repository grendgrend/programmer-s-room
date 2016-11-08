import React from 'react';
import BaseComponent from '../baseComponent/baseCoponent';
import styles from './chatForm.css';

export default class ChatForm extends BaseComponent {
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