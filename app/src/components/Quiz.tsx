import React, { Component } from "react"
import Star from './Star'
const quiz = require('../data/quiz.json')

class Quiz extends Component {
    public randQuiz: any
    public quizList: Array<number> = []

    constructor (props: any) {
        super(props)
        this.randQuiz = this.getQuiz()
    }

    public next() {
        this.randQuiz = this.getQuiz()
        this.setState({})
    }

    public showResult(isCorrect: boolean) {
        const result = document.querySelector('#result')
        if (result) result.innerHTML = isCorrect ? '맞았습니다' : '틀렸습니다'
        result?.classList.remove(isCorrect ? 'fail' : 'correct')
        result?.classList.add(isCorrect ? 'correct' : 'fail')
    }

    public click() {
        const inputText = document.querySelector('#input') as HTMLInputElement
        if (inputText.value === this.randQuiz.answer) this.showResult(true)
        else this.showResult(false)
        inputText.value = ''
        this.next()
    }

    public handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    public getQuiz() {
        let rand: number = Math.floor(Math.random() * Math.floor(quiz.length))
        // eslint-disable-next-line no-restricted-globals
        if (!(this.quizList.length === quiz.length)) {
            while (this.quizList.includes(rand)) rand = Math.floor(Math.random() * Math.floor(quiz.length))
            this.quizList.push(rand)
            console.log(rand)
            return quiz[rand]
        // eslint-disable-next-line no-restricted-globals
        } else location.href = './end'
    }

    public render() {
        return (
            <div>
                <h1>{this.randQuiz.word}</h1>
                <p>{this.randQuiz.isEng ? "의 뜻은?" : "의 뜻을 가진 영단어는?"}</p>
                <Star stars={this.randQuiz.stars}/>
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