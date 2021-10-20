// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({number: prevState.number + randomNumber}))
  }

  render() {
    const {number} = this.state
    const text = number % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="count-heading">Count {number}</h1>
          <p className="count-text">Count is {text}</p>
          <button type="button" onClick={this.onIncrement} className="button">
            Increment
          </button>
          <p className="instruction">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
