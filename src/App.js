import React from 'react';
import './App.scss';
import TopBarComponent from './dashboard/topbar/Topbar.component'
import SideBarComponent from './dashboard/sidebar/Sidebar.component'
import SettingsComponent from './dashboard/main/Settings.component'
function App() {
  return (
    <div className="App">
      <TopBarComponent/>
      <SideBarComponent/>
      <SettingsComponent/>
    </div>
  );
}

export default App;
