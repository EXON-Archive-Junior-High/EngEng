import React, { Component } from 'react'

type starType = {
    stars: number
}

class Star extends Component<starType> {
    public render() {
        return (
            <div>
                <span className={this.props.stars >= 1 ? "fa fa-star checked" : "fa fa-star"}></span>
                <span className={this.props.stars >= 2 ? "fa fa-star checked" : "fa fa-star"}></span>
                <span className={this.props.stars >= 3 ? "fa fa-star checked" : "fa fa-star"}></span>
                <span className={this.props.stars >= 4 ? "fa fa-star checked" : "fa fa-star"}></span>
                <span className={this.props.stars >= 5 ? "fa fa-star checked" : "fa fa-star"}></span>
            </div>
        )
    }
}

export default Star