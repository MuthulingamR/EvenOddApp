import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onclickButton = () => {
    const randomNum = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    let text
    if (count % 2 === 0) {
      text = 'Count is Even'
    } else {
      text = 'Count is Odd'
    }
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="title">{text}</p>
          <button type="button" className="btn" onClick={this.onclickButton}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
