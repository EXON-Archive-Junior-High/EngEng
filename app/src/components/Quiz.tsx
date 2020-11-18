import React, { Component } from "react"
import Input from "./Input"
const quiz = require('../data/quiz.json')

class Quiz extends Component {
    public getQuiz() {
        return quiz[Math.floor(Math.random() * Math.floor(quiz.length))]
    }

    public render() {
        const randQuiz = this.getQuiz()
        return (
            <div>
                <h1>{randQuiz.word}</h1>
                <p>{randQuiz.isEng ? "의 뜻은?" : "의 뜻을 가진 영단어는?"}</p>
                <br />
                <Input word={randQuiz.word} IsEng={randQuiz.isEng} answer={randQuiz.answer}/>
            </div>
        )
    }
}

export default Quiz