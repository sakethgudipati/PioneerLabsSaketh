import {BiBitcoin, BiBarChartSquare} from 'react-icons/bi'
import {AiFillHome, AiFillWallet} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './index.css'

const NavItem = props => {
  const {navItemDetails, isActive, clickNavItem} = props
  const {id, navItem} = navItemDetails

  const onClickNavItem = () => {
    clickNavItem(id)
  }

  const renderHome = () => (
    <Link to="/" className="link" onClick={onClickNavItem}>
      <li>
        <button
          className={isActive ? 'nav-item' : 'active-nav-item'}
          type="button"
        >
          <AiFillHome
            className={isActive ? 'icon active-icon' : 'icon normal-icon'}
          />
          <p className="nav-item-text">{navItem}</p>
        </button>
      </li>
    </Link>
  )

  const renderCharts = () => (
    <Link to="/charts" className="link" onClick={onClickNavItem}>
      <li>
        <button
          className={isActive ? 'nav-item' : 'active-nav-item'}
          type="button"
        >
          <BiBarChartSquare
            className={isActive ? 'icon active-icon' : 'icon normal-icon'}
          />
          <p className="nav-item-text">{navItem}</p>
        </button>
      </li>
    </Link>
  )

  const renderPrices = () => (
    <Link to="/prices" className="link" onClick={onClickNavItem}>
      <li>
        <button
          className={isActive ? 'nav-item' : 'active-nav-item'}
          type="button"
        >
          <BiBitcoin
            className={isActive ? 'icon active-icon' : 'icon normal-icon'}
          />
          <p className="nav-item-text">{navItem}</p>
        </button>
      </li>
    </Link>
  )

  const renderWallet = () => (
    <Link to="/wallet" className="link" onClick={onClickNavItem}>
      <li>
        <button
          className={isActive ? 'nav-item' : 'active-nav-item'}
          type="button"
        >
          <AiFillWallet
            className={isActive ? 'icon active-icon' : 'icon normal-icon'}
          />
          <p className="nav-item-text">{navItem}</p>
        </button>
      </li>
    </Link>
  )

  switch (id) {
    case 'CHARTS':
      return renderCharts()
    case 'PRICES':
      return renderPrices()
    case 'WALLET':
      return renderWallet()
    default:
      return renderHome()
  }
}

export default NavItem
