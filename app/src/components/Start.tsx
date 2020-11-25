import React, { Component } from "react"

class Start extends Component {
    constructor(props: any) {
        super(props);
        localStorage.setItem('score', '0')
    }

    public render() {
        return (
            <div>
                {/* eslint-disable-next-line no-restricted-globals */}
                <button onClick={() => location.href = '../quiz'}>시작하기</button>
            </div>
        )
    }
}

export default Start