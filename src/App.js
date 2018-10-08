import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { modelInstance } from './Data/portofolioModel';
import { Redirect } from 'react-router';

import DetailProjectView from './View/detailProjectView';
import MainView from './View/mainView';
import SideBarView from './View/sideBarView';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid row">
          <div className="sidebar col-sm-4">
            <SideBarView model={modelInstance}/>
          </div>
          <div className="main-content col-sm-8">
            <Route path="/"  render={() => <MainView model={modelInstance}/>}/>
            <Route path="/detailProject"  render={(props) => <DetailProjectView model={modelInstance}/>}/>
          </div>
      </div>
    );
  }
}

export default App;
