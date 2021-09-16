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
        // const { match }: any = this.props
        // console.log(match)
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <div className="App center">
                        <Route exact path="/" component={Start} />
                        {/* <Route path={`${match.url}/Quiz`} component={Quiz} />
                        <Route path={`${match.url}/End`} component={End} /> */}
                        <Route path="/EngEng/Quiz" component={Quiz} />
                        <Route path="/EngEng/End" component={End} />
                    </div>
                </Switch>
            </Router>
        )
    }
}

export default App;
