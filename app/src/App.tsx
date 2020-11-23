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
                    <div className="App center">
                        <Route exact path="/" component={Quiz} />
                        <Route path="/end" component={End} />
                    </div>
                </Switch>
            </Router>
        )
    }
}

export default App;
