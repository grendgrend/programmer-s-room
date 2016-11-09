import React from 'react';

export default class BaseComponent extends React.Component {

    unsubscribe = [];

    constructor( service ) {
        super();
    }
    componentWillUnmount() {
        this.unsubscribe.forEach( (item) => {
            item();
        });
    }

}