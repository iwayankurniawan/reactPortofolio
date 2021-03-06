import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import './style.css';

class SideBarView extends Component {
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
      <div>
        <div className="koho-style">
          <p className="name">I Wayan Kurniawan</p>
          <div className="row">
            <img src={require('../images/photo.JPG')} className="img-size img-responsive img-circle img-thumbnail img-fluid"/>
          </div>
          <div className="row">
            <p className="study row">Interactive Media Technology</p>
            <p className="study row">KTH Royal Institute of Technology</p>
          </div>
          <div className="margin-sidebar row">
            <Link to={"/project"}>
              <button id="portfolio" className="btn">Portfolio</button>
            </Link>
          </div>
          <div className="margin-sidebar row">
            <button id="Blog" className="btn"><a href="http://www.techraveller.com/" target="_blank">Blog</a></button>
          </div>
          <div className="margin-sidebar row">
            <button className="btn">About</button>
          </div>
        </div>
      </div>
    );
  }

}

export default SideBarView;
