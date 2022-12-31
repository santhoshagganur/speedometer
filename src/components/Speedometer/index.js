// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state: {speed: 0}

  onIncrementSpeed = () => {
    this.setState(prevState => ({speed: prevState.speed + 10}))
  }

  onDecrementSpeed = () => {
    this.setState(prevState => ({speed: prevState.speed - 10}))
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading"> SPEEDOMETER </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
          className="image"
        />
        <p className="description"> Speed is {speed}mph </p>
        <p className="warning"> Min Limit is 0mph, Max Limit is 200mph </p>
        <div>
          <button
            type="button"
            className="accelerate-btn"
            onClick={this.onIncrementSpeed}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="break-btn"
            onClick={this.onDecrementSpeed}
          >
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
