import React, { Component } from 'react';

class Subject extends Component {
    __construct() {
        console.log(this);
    }

    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {this.props.subTitle}
            </header>
        );
    }
}

export default Subject;
