import {Component} from 'react'
import NavItem from '../NavItem/index'
import './index.css'

const navItemList = [
  {
    id: 'HOME',
    navItem: 'Home',
  },
  {
    id: 'CHARTS',
    navItem: 'Charts',
  },
  {
    id: 'PRICES',
    navItem: 'Prices',
  },
  {
    id: 'WALLET',
    navItem: 'Wallet',
  },
]

class Navbar extends Component {
  state = {
    activeNavItem: navItemList[0].id,
  }

  clickNavItem = id => {
    this.setState({activeNavItem: id})
  }

  render() {
    const {activeNavItem} = this.state
    return (
      <nav className="nav-bar">
        <img
          src="https://res.cloudinary.com/defacaof3/image/upload/v1711548651/Screenshot_2024-03-27_194009-removebg-preview_djsqlj.png"
          className="logo"
          alt="logo"
        />
        <input type="search" placeholder="Search" className="search-element" />
        <ul className="nav-list">
          {navItemList.map(eachItem => (
            <NavItem
              key={eachItem.id}
              navItemDetails={eachItem}
              isActive={activeNavItem === eachItem.id}
              clickNavItem={this.clickNavItem}
            />
          ))}
        </ul>
      </nav>
    )
  }
}

export default Navbar
