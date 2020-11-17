import React, { Component } from "react"
import Input from "./Input"

class Quiz extends Component {
    public render() {
        return (
            <div>
                <h1>Hello</h1>
                <p>의 뜻은?</p>
                <br />
                <Input word="Hello" IsEng={true} answer="안녕하세요"/>
            </div>
        )
    }
}

export default Quiz