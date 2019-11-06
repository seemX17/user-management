import React from 'react';
import './App.scss';
import TopNavBarComponent from './dashboard/topbar/Top-nav.component';
import SideNavBarComponent from './dashboard/sidebar/Side-nav.component';
import MainComponent from './dashboard/main/Main.component';

function App() {
  return (
    <div className="App">
      <TopNavBarComponent/>
      <SideNavBarComponent/>
      <MainComponent/>
    </div>
  );
}

export default App;
