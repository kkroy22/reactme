import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/Resume">Resume</NavItem>
        <NavItem to="/aboutMe">XP</NavItem>
      </NavigationContainer>
    );
  }
}

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

export default NavigationBar;
