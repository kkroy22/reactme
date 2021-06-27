import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Background } from './App.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { H1, H2, H3, H4, H5, P, A, } from '../../theme/types';

class App extends Component {
  render() {
    return (
	<div>
        <img src={logo} className="App-logo" alt="logo" />
        December 4, 2018
        <Background/>
        <NavigationBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
