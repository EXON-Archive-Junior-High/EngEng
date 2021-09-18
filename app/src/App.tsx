import React, { Component } from 'react'
import './css/App.css'
import Quiz from './components/Quiz'
import Start from './components/Start'
import End from './components/End'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"

class App extends Component {
    public render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <div className="App center">
                        <Route exact path="/" component={Start} />
                        <Route path="/Quiz" component={Quiz} />
                        <Route path="/End" component={End} />
                    </div>
                </Switch>
            </Router>
        )
    }
}

export default App;
