import React from 'react';
import './codeEditor.scss';

export default class CodeEditor extends React.Component {
    render() {
        let { title } = this.props;
        return (
            <div id = { title } className = "editor">
                <div className = "title">
                    {title}
                </div>
                <div className = "editorArea" contentEditable = "true">

                </div>
            </div>
        );
    }
}