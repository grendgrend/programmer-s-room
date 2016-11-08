import React from 'react';
import BaseComponent from '../baseComponent/baseCoponent';
import styles from './editorsContainer.css';
import CodeEditor from '../codeEditor/codeEditor';

export default class EditorsContainer extends BaseComponent {
    render() {
        return (
            <div className = { styles.editors }>
                <CodeEditor title = "HTML" />
                <CodeEditor title = 'JavaScript' />
            </div>
        );
    }
}