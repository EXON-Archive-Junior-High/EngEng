import React, { Component } from "react"

class End extends Component {
    public getScore() {
        return localStorage.getItem('score')
    }

    public render() {
        return (
            <div>
                <h1>{this.getScore()}</h1>
                <p>퀴즈 끝</p>
            </div>
        )
    }
}

export default End