import React, { Component } from 'react';

class TOC extends Component {
    render() {

        const data = this.props.data;

        return (
            <nav>
                {data.map((value, index) => {
                    return <li key={'TOC-li-' + index}><a href={value.id + '.html'}>{value.title}</a></li>
                })}
            </nav>
        );
    }
}

export default TOC;