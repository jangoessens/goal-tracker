import React from 'react'

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {thing : props.thing}
    }

    render() {
        return <h1>{this.state.thing} </h1>
    }
}
export default Calendar;