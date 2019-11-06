import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";
import SettingsComponent from './Settings.component';
import DummyComponent from './Dummy.component';

class MainComponent extends React.Component {
    render() {
        return (
            <Router>
                <div className="layout--middle--section">
                    <Switch>
                        <Route exact path="/">
                            <DummyComponent />
                        </Route>
                        <Route path="/about">
                            <DummyComponent />
                        </Route>
                        <Route path="/settings">
                            <SettingsComponent />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default MainComponent;
