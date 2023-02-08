import React from 'react'
import {Link} from "react-router-dom"
import { useState } from 'react'

export const Navbar = () => {
  return (
  <nav>
    <ul>
      <li><Link to="/homepage">Home</Link></li>
      <li><Link to="/account">Account</Link></li>
    </ul>
    </nav>
  );
}
