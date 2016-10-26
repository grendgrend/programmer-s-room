import React from 'react';
import './editorsContainer.scss';
import CodeEditor from '../codeEditor/codeEditor';

export default class EditorsContainer extends React.Component {
    render() {
        return (
            <div className = "editors">
                <CodeEditor title = "HTML" />
                <CodeEditor title = 'JavaScript' />
            </div>
        );
    }
}