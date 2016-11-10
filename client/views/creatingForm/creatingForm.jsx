import React from 'react';
import BaseComponent from '../baseComponent/baseCoponent';
import styles from './creatingForm.css';
import Mapper from '../../services/mapper/mapper';

export default class CreatingForm extends BaseComponent {

    state = {
      roomLink : ''
    };
    service = Mapper.RoomService;

    constructor() {
        super();
        this.unsubscribe.push( this.service.subscribe( () => this.onTrigger() ) );
    }
    onTrigger() {
        let { roomLink } = this.service.getRoomLink();
        this.setState( { roomLink : roomLink } );
    }
    render() {
        return (
            <div className = { styles.form }>
                <button>
                    Get new room!
                </button>
                <input className = { styles.link }
                       style = { { display : this.state.roomLink ? 'block' : 'none' } }
                       value = { this.state.roomLink }
                />
            </div>
        );
    }
}