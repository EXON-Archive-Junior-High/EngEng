import React, { Component } from "react"

type quizType = {
    word: string,
    IsEng: boolean,
    answer: string
}

class Input extends Component<quizType> {

    public showResult(isCorrect: boolean) {
        const inputText = document.querySelector('#input') as HTMLInputElement
        const result = document.querySelector('#result')
        if (result) result.innerHTML = isCorrect ? '맞았습니다' : '틀렸습니다'
        result?.classList.remove(isCorrect ? 'fail' : 'correct')
        result?.classList.add(isCorrect ? 'correct' : 'fail')
        inputText.value = ''
    }

    public click() {
        const inputText = document.querySelector('#input') as HTMLInputElement
        if (inputText.value.toLowerCase() === this.props.answer) {
            this.showResult(true)
        }
        else this.showResult(false)
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
                <br />
                <p id="result" className="correct"></p>
            </div>
        )
    }
}

export default Input