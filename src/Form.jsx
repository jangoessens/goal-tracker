import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()};
  }
  render() {
    return (
      <section className='form'>
          <h1> zooi</h1>
      </section>
    )
  }
}

export default Form;