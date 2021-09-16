import React, { Component } from "react"

class Start extends Component {
    constructor(props: any) {
        super(props);
        localStorage.setItem('score', '0')
    }

    public render() {
        return (
            <div>
                <h1>영어 시험</h1> <br />
                {/* eslint-disable-next-line no-restricted-globals */}
                <button onClick={() => location.href = '../Quiz'}>시작하기</button>
            </div>
        )
    }
}

export default Start