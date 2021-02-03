import React, { Component } from 'react';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import MainText from "./components/MainText"
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Subject:{title:'WEB', subTitle:'World Wide Web!'},
            contents:[
                {id:1, title:'HTML', desc:'HTML is for information'},
                {id:2, title:'CSS', desc:'CSS is for design'},
                {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <Subject title={this.state.Subject.title} subTitle={this.state.Subject.subTitle}></Subject>
                <TOC data={this.state.contents}></TOC>
                <MainText title="HTML" text="HTML is HyperText Markup Language."></MainText>
            </div>
        );
    }
}

export default App;
