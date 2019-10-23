import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './menuContent.css'

class MenuContent extends Component {
  constructor(props) {
    super(props)

    this.items = []
    for (let i=1; i<=5; i++) {
      this.items.push(i)
    }
  }

  render() {
    return (
      <div className="menu">
        {/* {this.items.map(i => <div className="menu-item" key={i}>
          <a
            href="https://github.com/Middlerun/cheeseburger-menu"
            onClick={this.props.closeCallback}
            target="_blank">
            Menu item {i}
          </a>
        </div>)} */}
        <nav className='menu-item'>
        <NavLink to ='/books'>Books</NavLink>
        <NavLink to ='/book/:id'>Book Details</NavLink>
        <NavLink to = '/logout'>Log Out</NavLink>
        {/* <NavLink to ='/'>Books</NavLink> */}
        </nav>
        
      </div>
    )
  }
}

// MenuContent.PropTypes = {
//   closeCallback: React.PropTypes.func.isRequired
// }

export default MenuContent