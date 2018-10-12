import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { modelInstance } from './Data/portofolioModel';
import { Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from "react-transition-group";


import MainView from './View/mainView';
import SideBarView from './View/sideBarView';
import FilterView from './View/filterView';
import DetailProjectView from './View/detailProjectView';
import Welcome from './View/welcome';

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
      //changeMode = <Route path="/:id" render={(props) => <DetailProjectView model={modelInstance}/>}/>
    } else if(this.state.mode=="main"){
      //changeMode = <Route path="/"  render={(props) => <Welcome model={modelInstance}/>}/>
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
          <Route render={(props) =>
            <TransitionGroup>
              <CSSTransition
                key={props.location.key}
                timeout={{ enter: 1000, exit: 100 }}
                classNames={'fade'}
                >
                  <Switch>
                    <Route path="/project"  render={(props) => <MainView model={modelInstance}/>}/>
                    <Route path="/:id" render={(props) =>  <DetailProjectView model={modelInstance}/>}/>
                    <Route path="/"  render={(props) => <Welcome model={modelInstance}/>}/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            }/>
          </div>
        </div>
      );
  }
}

export default App;
