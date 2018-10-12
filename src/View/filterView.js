import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import './style.css';

class FilterView extends Component {
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

  handleClick= (e) => {
    this.props.model.setFilterTag(e.target.id);
  }

  render() {
    return(
      <div className="row koho-style">
        <Link to={"/project"}><button onClick={this.handleClick} id="all" className="col-sm-3 btn">#All</button></Link>
        <Link to={"/project"}><button onClick={this.handleClick} id="website" className="col-sm-3 btn">#Website</button></Link>
        <Link to={"/project"}><button onClick={this.handleClick} id="apps" className="col-sm-3 btn">#Apps</button></Link>
        <Link to={"/project"}><button onClick={this.handleClick} id="electrical" className="col-sm-3 btn">#Electrical</button></Link>
      </div>
    );
  }


}

export default FilterView;
