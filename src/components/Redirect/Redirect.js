import React, { Component, PropTypes } from 'react';
import {P, A } from '../../theme/types';
import { Title } from './Redirect.style';

export class Redirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    window.location = this.state.route.loc;
  }
  render(){
    return (<section><P>&nbsp;</P><P>&nbsp;</P><Title>Redirecting to owcsx....if not Redirecting click <A href = "http://www.owcsx.science">owcsx</A> </Title></section>);
  }
}


export default Redirect;
