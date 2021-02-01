import React, { Component } from 'react';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import MainText from "./components/MainText"
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Subject title="WEB" subTitle="World Wide Web!"></Subject>
                <TOC></TOC>
                <MainText title="HTML" text="HTML is HyperText Markup Language."></MainText>
            </div>
        );
    }
}

export default App;
