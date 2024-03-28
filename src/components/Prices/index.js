import {Component} from 'react'
import Navbar from '../Navbar/index'
import './index.css'

class Prices extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="prices-container">
          <h1>Explore Our Prices From Different Sources</h1>
          <button className="get-started-button" type="button">
            Explore
          </button>
        </div>
      </>
    )
  }
}

export default Prices
