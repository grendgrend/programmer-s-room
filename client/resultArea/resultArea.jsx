import React from 'react';
import styles from './resultArea.css';

export default class ResultArea extends React.Component {
    render() {
        return (
            <div className = { styles.resultArea }>
                <div className = { styles.title }>
                    Result
                </div>
                <div className = { styles.actions }>
                    
                </div>
                <iframe src="result.html">

                </iframe>
            </div>
        );
    }
}