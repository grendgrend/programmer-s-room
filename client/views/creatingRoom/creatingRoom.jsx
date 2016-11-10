import React from 'react';
import BaseComponent from '../baseComponent/baseCoponent';
import styles from './creatingRoom.css';
import CreatingForm from '../creatingForm/creatingForm';

export default class CreatingRoom extends BaseComponent {
    render() {
        return (
            <div className = { styles.container }>
                <div className = { styles.creatingRoom }>
                    <p>
                        If you're already have a link from other user just use it. <br/>
                        If not, create a new room and have fun!
                    </p>
                    <CreatingForm/>
                </div>
            </div>
        );
    }
}