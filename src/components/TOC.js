import React, { Component } from 'react';

class TOC extends Component {
    constructor (props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        this.props.onChangeContent(e, e.target.dataset.id);
    }

    render() {
        const data = this.props.data;

        return (
            <nav>
                {data.map((value, index) => {
                    return <li key={'TOC-li-' + index}>
                            <a href={value.id + '.html'}
                                data-id={value.id}
                                onClick={this.onClick}
                            >{value.title}</a>
                        </li>
                })}
            </nav>
        );
    }
}

export default TOC;