import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import FilterView from './filterView';
import './style.css';

import { modelInstance } from '../Data/portofolioModel';

class MainView extends Component {
  constructor(props) {
    super(props)
    // We put on state the properties we want to use and modify in the component
    this.state = {
      years: this.props.model.getYear(),
      projects : this.props.model.getAllProject(),
      updateTag: this.props.model.getFilterTag(),
    }
  }

  componentDidMount() {
    this.props.model.addObserver(this);
    this.props.model.setCondition("main");

  }

  componentWillUnmount() {
    this.props.model.removeObserver(this);
    this.props.model.getYear();

  }

  update() {
    // setState causes the component to re-render
    this.setState({
      years: this.props.model.getYear(),
      projects : this.props.model.getAllProject(),
      updateTag: this.props.model.getFilterTag(),

    });


  }

  handleClicks= (e) => {
    this.props.model.setId(e.target.id);
    this.props.model.setCondition("detail");
  }


  render() {
    var yearList = null;
    var projectList = null


  yearList = this.state.years.map((year) => {
    return(
    <div key={year} className="row">
      <h1 className="year-content">{year}</h1>
      <div className="row">
        {this.state.projects.map((project) => {
          //projectList = <img src={require('../images/'+ project.image)} className="col-sm-3 img-thumbnail img-fluid image"/>;

          projectList =<div  class="img-container col-sm-3 ">
            <Link to={"/" + project.id}>
              <img src={require('../images/'+ project.image)} className="img-thumbnail img-fluid"/>
              <div onClick={this.handleClicks} id={project.id} class="overlay">
                <div onClick={this.handleClicks} id={project.id} class="text">{project.name}</div>
              </div>
            </Link>
          </div>
          if (year == project.year && this.state.updateTag == project.type){
            return(
               <div>{projectList}</div>
            );
          } else if(year == project.year && (this.state.updateTag == null || this.state.updateTag == "all")){
            return(
             <div>{projectList}</div>
            );
          }
        })}
      </div>
    </div>
    );
  })


    return(
      <div>
        <div className="row">
          {yearList}
        </div>
      </div>
    );
  }
}

export default MainView;
