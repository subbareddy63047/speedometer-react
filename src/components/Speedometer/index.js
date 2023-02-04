// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerateSpeed = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  deAccelerateSpeed = () => {
    const {count} = this.state
    if (count >= 10) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="speed-para">Speed is {count}mph</h1>
        <p className="limit-para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            className="button-1"
            type="submit"
            onClick={this.accelerateSpeed}
          >
            Accelerate
          </button>
          <button
            className="button-2"
            type="submit"
            onClick={this.deAccelerateSpeed}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
