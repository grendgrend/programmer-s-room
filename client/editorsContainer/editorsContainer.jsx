import React from 'react';
import styles from './editorsContainer.css';
import CodeEditor from '../codeEditor/codeEditor';

export default class EditorsContainer extends React.Component {
    render() {
        return (
            <div className = { styles.editors }>
                <CodeEditor title = "HTML" />
                <CodeEditor title = 'JavaScript' />
            </div>
        );
    }
}