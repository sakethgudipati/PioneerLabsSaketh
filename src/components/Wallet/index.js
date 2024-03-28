import {Component} from 'react'
import Navbar from '../Navbar/index'
import './index.css'

class Wallet extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="prices-container">
          <h1>
            With DeltaCrypt, make access and trade with your virtual wallet
          </h1>
          <button className="get-started-button" type="button">
            Connect Wallet
          </button>
        </div>
      </>
    )
  }
}

export default Wallet
