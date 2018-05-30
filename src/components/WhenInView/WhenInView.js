import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

class WhenInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInView: false
    };

    this.onEnter = this.onEnter.bind(this);
  }

  onEnter({ previousPosition }) {
    if (previousPosition === Waypoint.below) {
      this.setState({
        isInView: true
      });
    }
  }

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

  render() {
    return (
      <div>
        <Waypoint onEnter={this.onEnter}></Waypoint>
        {this.props.children({ isInView: this.state.isInView })}
      </div>
    );
  }
}

//https://www.bikky.space
//https://www.owcsx.science
//https://www.linkedin.com/in/kkroy22/

export default WhenInView;
