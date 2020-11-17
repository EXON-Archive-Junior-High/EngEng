import React, { Component } from 'react'
import './css/App.css'
import Quiz from './components/Quiz'

class App extends Component {
    public render() {
        return (
            <div className="App">
                <div className="center">
                    <Quiz />
                </div>
            </div>
        )
    }
}

export default App;
