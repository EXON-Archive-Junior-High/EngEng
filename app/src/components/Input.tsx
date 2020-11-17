import React, { Component } from "react"

type quizType = {
    word: string,
    IsEng: boolean,
    answer: string
}

class Input extends Component<quizType> {
    public click() {
        const inputText = document.querySelector('#input') as HTMLInputElement
        if (inputText.value === this.props.answer) {
            alert('맞았습니다')
        }
    }

    public handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    public render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input id="input"></input>
                    <button onClick={this.click.bind(this)}>제출</button>
                </form>
            </div>
        )
    }
}

export default Input