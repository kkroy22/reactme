import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Background } from './App.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { hashHistory } from 'react-router';

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

class App extends Component {
  render() {
    return (
	<div>
        <img src={logo} className="App-logo" alt="logo" />
        proudly using React.js
        <Background/>
        <NavigationBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
