import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import './style.css';

class Welcome extends Component {
  constructor(props) {
    super(props)
    // We put on state the properties we want to use and modify in the component
    this.state = {

    }
  }

  componentDidMount() {
    this.props.model.addObserver(this);
  }

  componentWillUnmount() {
    this.props.model.removeObserver(this);
  }

  update() {
    // setState causes the component to re-render
    this.setState({

    });
  }


  render() {
    return(
      <div className="detail-title">
        <div className="for-height row">

        </div>
        <div className="row">
          <p>Hi, I am Wayan :)</p>
          <p>I Design & Build anything related with... </p>
          <p >AR, Android, Website & Computer Graphics </p>
        </div>
      </div>
    );
  }

}

export default Welcome;
