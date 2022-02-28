import React from 'react'
import './App.css'
import Calendar from './Components/Calendar';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()};
  }
  render() {
    return (
      <section className='app'>
        <Calendar thing="Kut" />
      </section>
    )
  }
}

export default App;