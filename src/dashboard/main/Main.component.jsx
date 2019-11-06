import React from 'react';
import SettingsComponent from './Settings.component';

class MainComponent extends React.Component {
    render() {
      return (
        <div className="layout--middle--section">
          <SettingsComponent/>
        </div>
      );      
    }
}
export default MainComponent;
