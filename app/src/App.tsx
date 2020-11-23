import React, { Component } from 'react'
import './css/App.css'
import Quiz from './components/Quiz'
import End from './components/End'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    public render() {
        return (
            <Router>
                <Switch>
                    <Route path="/">
                        <div className="App center">
                            <Quiz />
                        </div>
                    </Route>
                    <Route path="/end">
                        <End />
                    </Route>
                    <Route path="/e">
                        <h1>dfdsaasd</h1>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;
