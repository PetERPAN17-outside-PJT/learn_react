import React, { Component } from 'react';
// import Subject from "./components/Subject";
import Content from "./components/Content";
import TOC from "./components/TOC";
import './App.css';
import { element } from 'prop-types';

class App extends Component {
    constructor(props) {
        super(props);
        this.aClick = this.aClick.bind(this);

        this.state = {
            mode: 'welcome',
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
            mode: 'welcom',
        });
    }

    render() {

        var _title, _desc = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else {
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }

        return (
            <div className="App">
                {/* <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}>
                </Subject> */}
                <header>
                    <h1><a href="/" onClick={this.aClick} >{this.state.subject.title}</a></h1>
                    {this.state.subject.sub}
                </header>
                <TOC data={this.state.contents} ></TOC>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;
