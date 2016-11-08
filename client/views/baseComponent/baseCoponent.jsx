import React from 'react';

export default class BaseComponent extends React.Component {

    unsubscribe : [ ];

    componentWillUnmount() {
        this.unsubscribe.forEach( (item) => {
            item();
        });
    }
}