import React, { Component } from 'react';
import Subject from "./components/Subject";
import Content from "./components/Content";
import TOC from "./components/TOC";
import './App.css';
import { element } from 'prop-types';

class App extends Component {
    constructor(props) {
        super(props);
        this.aClick = this.aClick.bind(this);
        this.changeContent = this.changeContent.bind(this);

        this.state = {
            mode: 'read',
            selectd_content_id: 1,
            subject: {title: 'WEB', sub: 'World Wide Web!'},
            welcome: {title: 'Welcome', desc: 'Hello, React!!'},
            contents: [
                {id: 1, title: 'HTML', desc: 'HTML is ....'},
                {id: 2, title: 'CSS', desc: 'CSS is ....'},
                {id: 3, title: 'Javascript', desc: 'Javascript is ....'},
            ]
        };
    }

    aClick(e) {
        e.preventDefault();
        this.setState({
            mode: 'welcome',
        });
    }

    changeContent(e, contentId) {
        e.preventDefault();
        this.setState({
            mode: 'read',
            selectd_content_id: Number(contentId)
        });
    }

    render() {

        var _title, _desc = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else {
            this.state.contents.forEach(element => {
                if (element.id === this.state.selectd_content_id) {
                    _title = element.title;
                    _desc = element.desc;
                }
            });
        }

        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={this.aClick}
                >
                </Subject>
                <TOC data={this.state.contents}
                    onChangeContent={this.changeContent}
                ></TOC>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;
