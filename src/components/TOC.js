import React, { Component } from 'react';

class TOC extends Component {
    constructor(props) {
        super(props);

        this.lists = [];

        let setData = (element) => (
            this.lists.push(<li key={element.id}><a href={element.id + '.html'}>{element.title}</a></li>)
        )

        props.data.forEach(
            (element) => setData(element)
        );
    }

    render() {
        return (
            <nav>
                <ul>
                    {this.lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;