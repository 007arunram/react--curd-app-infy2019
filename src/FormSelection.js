import React, { Component } from 'react';
import { render } from 'react-dom';
import Form01 from './Form01';
import Form02 from './Form02';
import Form03 from './Form03';

import './style.css';

class FormSelection extends Component {
  constructor() {
    super();
    this.state = {
      state: ''
    };
    this.stateVal = React.createRef();
  }
  changeState(){
    this.setState({state:this.stateVal.current.value});
  }
  render() {
    return (
      <div >
      <select ref={this.stateVal} onChange={()=>this.changeState()}>
      <option value="">SELECT STATE</option>
       <option value="first">Form01</option>
       <option value="second">Form02</option>
       <option value="third">Form03</option>
      </select>
       {this.state.state && this.state.state=="first" && <Form01 />}
       {this.state.state && this.state.state=="second" && <Form02 />}  
       {this.state.state  && <Form03 />}
       </div>
    );
  }
}

export default FormSelection;

