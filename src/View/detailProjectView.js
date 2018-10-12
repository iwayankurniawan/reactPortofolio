import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
  var resourcesExist= null;
  newproject= this.state.projects.map((project)=>{
      return(
      <div key={project.id} className="row">
        <div className="detail-title row">
          <p>{project.name}</p>
        </div>
        <div className="row">
          <Carousel>
          {project.imageList.map((images)=>
              <div>
                <img src= {require('../images/'+ images.image)} className="img-thumbnail img-fluid"/>
                <p className="legend">{project.name}</p>
              </div>
          )}
          </Carousel>
        </div>
        <div className="detail-title-content row">
          <p>Project Description</p>
        </div>
        <div className="detail-description row">
          <p>{project.description}</p>
        </div>
        <div className="detail-title-content row">
          <p>Technical Aspect</p>
        </div>
        <div className="detail-description row">
          <p>{project.tools.map((tools)=><li>{tools.skill}</li>)}</p>
        </div>
        <div className="detail-title-content row">
          <p>Resources</p>
        </div>
        <div className="detail-description row">
          <p>{project.links.map((link)=><li><a href={link.site} target="_blank">{link.explain}</a></li>)}</p>
        </div>
      </div>
        );
    })


    return(
      <div>
        {newproject}
        {resourcesExist}
      </div>
    );
  }


}

export default DetailProjectView;
