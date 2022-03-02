import React from 'react'
import './App.scss'
import Calendar from './Components/Calendar';
import Form from './Components/Form';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(), 
      duration: 24,
      days: [],
    };
    this.completeDay  = this.completeDay.bind(this);
    this.setAmountOfDays = this.setAmountOfDays.bind(this);
  }
  render() {
    return (
      <section className='app'>
        <Form setAmountOfDays={this.setAmountOfDays}/>
        <Calendar days={this.state.days} completeDay={this.completeDay}/>
      </section>
    )
  }
  componentDidMount() {
    this.updateDays();
  }
  updateDays = () => {
    this.setState({
      days : this.getDays(),
    })
  }
  setAmountOfDays = (amount) => {
    this.setState({
      duration: amount,
    }, () => {
      this.updateDays()
    })
  }
  completeDay = (index) => {
    let day = {...this.state.days[index], complete:true};
    let days = this.state.days;
    days[index] = day;
    this.setState({ days: days});

  }
  getDays = () => {
    const days = [];
    for (let i = 0; i < this.state.duration; i++) {
        const day = {};
        var dt = new Date();
        dt.setDate(this.state.startDate.getDate() + i);
        day.date = dt;
        days.push(day);
    }
    return days;
}

}

export default App;