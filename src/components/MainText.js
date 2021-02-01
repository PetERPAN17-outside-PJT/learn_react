import React, { Component } from 'react';

class MainText extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.title}</h2>
                {this.props.text}
            </article>
        );
    }
}

export default MainText;
