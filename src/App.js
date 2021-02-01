import React, { Component } from 'react';
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

class Subject extends Component {
    __construct() {
        console.log(this);
    }

    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {this.props.subTitle}
            </header>
        );
    }
}

class TOC extends Component {
    render() {
        return (
            <nav>
                <ui>
                    <li><a href="1.html">HTML</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">JavaScript</a></li>
                </ui>
            </nav>
        );
    }
}

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



export default App;
