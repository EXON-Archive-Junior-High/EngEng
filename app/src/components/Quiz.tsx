import React, { Component } from "react"
const quiz = require('../data/quiz.json')

class Quiz extends Component {
    public randQuiz: any

    public showResult(isCorrect: boolean) {
        const result = document.querySelector('#result')
        if (result) result.innerHTML = isCorrect ? '맞았습니다' : '틀렸습니다'
        result?.classList.remove(isCorrect ? 'fail' : 'correct')
        result?.classList.add(isCorrect ? 'correct' : 'fail')
        alert(isCorrect ? '맞았습니다' : '틀렸습니다')
    }

    public click() {
        const inputText = document.querySelector('#input') as HTMLInputElement
        if (inputText.value.toLowerCase() === this.randQuiz.answer) this.showResult(true)
        else this.showResult(false)
        this.setState({})
        inputText.value = ''
    }

    public handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    public getQuiz() {
        return quiz[Math.floor(Math.random() * Math.floor(quiz.length))]
    }

    public render() {
        this.randQuiz = this.getQuiz()
        return (
            <div>
                <h1>{this.randQuiz.word}</h1>
                <p>{this.randQuiz.isEng ? "의 뜻은?" : "의 뜻을 가진 영단어는?"}</p>
                <br />
                <div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input id="input"></input>
                        <button onClick={this.click.bind(this)}>제출</button>
                    </form>
                    <br />
                    <p id="result" className="correct"></p>
                </div>
            </div>
        )
    }
}

export default Quiz