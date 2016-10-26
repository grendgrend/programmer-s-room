import React from 'react';
import EditorsContainer from '../editorsContainer/editorsContainer';
import ResultArea from '../resultArea/resultArea';
import Chat from '../chat/chat';
import './singleArea.scss';

export default class SingleArea extends React.Component {
    render() {
        return (
            <div className="singleArea">
                <EditorsContainer/>
                <ResultArea/>
                <Chat/>
            </div>
        );
    }
}