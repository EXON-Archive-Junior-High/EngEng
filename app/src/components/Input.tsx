import React from "react";
import { Component } from "react";

class Input extends Component {
    public click() {
        alert('click')
    }

    public handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    public render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input></input>
                    <button onClick={this.click.bind(this)}>제출</button>
                </form>
            </div>
        )
    }
}

export default Input