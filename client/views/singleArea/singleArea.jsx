import React from 'react';
import BaseComponent from '../baseComponent/baseCoponent';
import EditorsContainer from '../editorsContainer/editorsContainer';
import ResultArea from '../resultArea/resultArea';
import Chat from '../chat/chat';
import styles from './singleArea.css';

export default class SingleArea extends BaseComponent{
    render() {
        return (
            <div className = { styles.singleArea } >
                <EditorsContainer/>
                <ResultArea/>
                <Chat/>
            </div>
        );
    }
}