import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router
} from "react-router-dom";
import TopNavBarComponent from './dashboard/topbar/Top-nav.component';
import SideNavBarComponent from './dashboard/sidebar/Side-nav.component';
import MainComponent from './dashboard/main/Main.component';

function App() {
  return (
    <div className="App">
      <Router>
        <TopNavBarComponent/>
        <SideNavBarComponent/>
        <MainComponent/>
      </Router>
    </div>
  );
}

export default App;
