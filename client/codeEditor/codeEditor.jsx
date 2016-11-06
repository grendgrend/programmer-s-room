import React from 'react';
import styles from './codeEditor.css';

export default class CodeEditor extends React.Component {
    render() {
        let { title } = this.props;
        return (
            <div id = { title } className = { styles.editor }>
                <div className = { styles.title }>
                    { title }
                </div>
                <div className = { styles.editorArea } contentEditable = "true">

                </div>
            </div>
        );
    }
}