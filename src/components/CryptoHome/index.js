import Navbar from '../Navbar/index'
import './index.css'

const CryptoHome = () => (
  <div className="home">
    <Navbar />
    <div className="main-page">
      <div className="home-container">
        <div className="p1">
          <h1 className="crypto-head">
            Price is what you pay. Value is what you get.
          </h1>
          <button className="get-started-button" type="button">
            Start Trading
          </button>
        </div>
        <img
          src="https://res.cloudinary.com/defacaof3/image/upload/v1711548760/bitcoin-polygonal-vector-illustration-white-background-cryptocurrency-low-poly-design_9385-486-removebg-preview_zybzbu.png"
          className="crypto-image"
          alt="crypto"
        />
      </div>
    </div>
  </div>
)

export default CryptoHome
