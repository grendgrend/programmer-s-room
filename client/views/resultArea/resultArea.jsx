import React from 'react';
import BaseComponent from '../baseComponent/baseCoponent';
import styles from './resultArea.css';
import Mapper from '../../services/mapper/mapper';

export default class ResultArea extends BaseComponent {

    service = Mapper.ResultService;

    constructor() {
        super();
        this.unsubscribe.push( this.service.subscribe( () => this.onTrigger() ) );
    }
    onTrigger() {

    }
    render() {
        return (
            <div className = { styles.resultArea }>
                <div className = { styles.title }>
                    Result
                </div>
                <div className = { styles.actions }>
                    
                </div>
                <iframe>

                </iframe>
            </div>
        );
    }
}