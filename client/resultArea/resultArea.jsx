import React from 'react';
import './resultArea.scss';

export default class ResultArea extends React.Component {
    render() {
        return (
            <div className = "resultArea">
                <div className = "title">
                    Result
                </div>
                <div className="actions">
                    
                </div>
                <iframe src="result.html">

                </iframe>
            </div>
        );
    }
}