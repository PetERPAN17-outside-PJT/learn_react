import React, { Component } from 'react';

class Subject extends Component {
    constructor(props) {
        super(props);
        this.aClick = this.aClick.bind(this);
    }

    aClick(e) {
        e.preventDefault();
        this.props.onChangePage(e);
    }

    render() {
        return (
            <header>
                <h1><a href="/"
                    onClick={this.aClick}
                >{this.props.title} </a></h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;
