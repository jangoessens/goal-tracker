import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='form'>
          <input name='days' type="number" onChange={this.setDays}></input>
      </section>
    )
  }
  setDays = (event) => {
    console.log(event.target.value);
    this.props.setAmountOfDays(parseInt(event.target.value));
  }
}

export default Form;