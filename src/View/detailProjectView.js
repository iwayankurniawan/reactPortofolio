import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class DetailProjectView extends Component {
  constructor(props) {
    super(props)
    // We put on state the properties we want to use and modify in the component
    this.state = {
      projects : this.props.model.getChosenProject(),
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
        projects : this.props.model.getChosenProject(),
    });
    }



  render(){

  var newproject=null;
  newproject= this.state.projects.map((project)=>
    <div key={project.id} className="row">
      <h4>{project.name}</h4>
    </div>)

    return(
      <div>
        {newproject}
      </div>
    );
  }


}

export default DetailProjectView;
