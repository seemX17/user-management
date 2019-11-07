import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SettingsComponent from './Settings.component';
import DummyComponent from './Dummy.component';

class MainComponent extends React.Component {
    render() {
        return (
                <div className="layout--middle--section">
                    <Switch>
                        <Route exact path="/">
                            <DummyComponent />
                        </Route>
                        <Route path="/product">
                            <DummyComponent />
                        </Route>
                        <Route path="/demoscripts">
                            <DummyComponent />
                        </Route>
                        <Route path="/customers">
                            <DummyComponent />
                        </Route>
                        <Route path="/salesteam">
                            <DummyComponent />
                        </Route>
                        <Route path="/demos">
                            <DummyComponent />
                        </Route>
                        <Route path="/settings">
                            <SettingsComponent />
                        </Route>
                    </Switch>
                </div>
        );
    }
}
export default MainComponent;
