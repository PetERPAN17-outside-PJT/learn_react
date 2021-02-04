import React, { Component } from 'react';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import MainText from "./components/MainText"
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Mode:'Welcome',
            Subject:{title:'WEB', subTitle:'World Wide Web!'},
            Welcome:{title:'Welcome', desc:'Hello, React!'},
            contents:[
                {id:1, subject:'WEB', title:'Welcome', subTitle:'World Wide Web!', desc:'HTML is for information'},
                {id:2, subject:'HTML', title:'HTML', subTitle:'World Wide Web!', desc:'HTML is for information'},
                {id:3, subject:'CSS', title:'CSS', subTitle:'World Wide Web!', desc:'CSS is for design'},
                {id:4, subject:'JavaScript', title:'JavaScript', subTitle:'World Wide Web!', desc:'JavaScript is for interactive'},
            ]
        }
    }

    render() {

        let subject = null;
        let mode = null;
        let mainText = null;

        if (this.state.Mode === 'Welcome') {
            subject = this.state.Subject;
            mode = this.state.Welcome;
            mainText = this.state.Welcome;
        } else if (this.state.Mode === 'Read') {
            subject = this.state.contents[0];
            mode = this.state.Subject;
            mainText = this.state.contents[0];
        }

        return (
            <div className="App">
                <Subject title={subject.title} subTitle={subject.subTitle}></Subject>
                <TOC data={this.state.contents}></TOC>
                <MainText title={mainText.title} text={mainText.desc}></MainText>
            </div>
        );
    }
}

export default App;
