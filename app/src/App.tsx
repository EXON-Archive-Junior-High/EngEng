import React, { Component } from 'react'
import './css/App.css'
import Quiz from './components/Quiz'
import Start from './components/Start'
import End from './components/End'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter,
    Redirect
} from "react-router-dom";

class App extends Component {
    public render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div className="App center">
                    <Route exact path="/" component={Start} />
                    <Route path="/EngEng/quiz" component={Quiz} />
                    <Route path="/EngEng/end" component={End} />
                </div>
            </Router>
            // <div className="App center">
            //     <HashRouter key="quiz" basename="quiz">
            //         <Quiz/>
            //     </HashRouter>
            // </div>
            
        )
    }
}

export default App;
