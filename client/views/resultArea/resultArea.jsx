import React from 'react';
import BaseComponent from '../baseComponent/baseCoponent';
import styles from './resultArea.css';

export default class ResultArea extends BaseComponent {
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