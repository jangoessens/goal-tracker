import React, { Component } from 'react'
import '../styles/day.scss';
export class Day extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={`day ${this.props.day.complete ? 'complete' : ''}`} onClick={this.handleClick}>
                <div className='date'>
                    {this.props.day.date.getDate()}
                </div>
            </div>
        )
    }
    handleClick = () => {
        this.props.completeDay(this.props.index);
    }

}

export default Day