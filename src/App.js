import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { modelInstance } from './Data/portofolioModel';
import { Redirect } from 'react-router';


import MainView from './View/mainView';
import SideBarView from './View/sideBarView';
import FilterView from './View/filterView';
import DetailProjectView from './View/detailProjectView';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    // We put on state the properties we want to use and modify in the component
    this.state = {
      mode: modelInstance.getCondition()
    }
  }

  componentDidMount() {
    modelInstance.addObserver(this);
  }

  componentWillUnmount() {
    modelInstance.removeObserver(this);
  }

  update() {
    // setState causes the component to re-render
    this.setState({
      mode: modelInstance.getCondition()
    });
  }

  render() {
    var changeMode = null;

    if (this.state.mode=="detail"){
      changeMode = <Route path="/:id" render={(props) => <DetailProjectView model={modelInstance}/>}/>
    } else if(this.state.mode=="main"){

    }



    return (
      <div className="App container-fluid row">
          <div className="sidebar col-sm-3">
            <SideBarView model={modelInstance}/>
          </div>
          <div className="main-content col-sm-7">
            <div className="row">
              <FilterView model={modelInstance}></FilterView>
            </div>
            <Route path="/project"  render={(props) => <MainView model={modelInstance}/>}/>
            {changeMode}
          </div>
      </div>
    );
  }
}

export default App;
