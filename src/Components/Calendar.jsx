import React from 'react'
import Day from './Day';
import '../styles/calendar.scss';

class Calendar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return this.props.days ? (
            <div className='calendar'>
                {
                    this.props.days.map((day, i) => {
                        return <Day key={i} day={day} index={i} completeDay={this.props.completeDay} />
                    })
                }
            </div>
        ) : null;
    }

}
export default Calendar;

