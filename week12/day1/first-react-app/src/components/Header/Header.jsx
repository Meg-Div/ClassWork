
/*

//rc

import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>Header</div>
    )
  }
}
*/

//react functional components
//rf

import React from 'react'
import "./Header.css"

const Header = ({student2, counter}) => {
  return (
    <div className="headerBody">
        <h2>Header</h2>
        <p>{student2}</p>
        <p>This is a Header Component</p>
        <p>This is a state {counter}</p>
    </div>
  )
}

export default Header;

