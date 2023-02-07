import React from 'react'
import "./Footer.css"

const Footer = ({studentName, counter}) => {
    console.log(studentName)
  return (
    <div className= "footerBody">
        <h2>Footer</h2>
        <p>{studentName}</p>
        <p>This is a Footer Component</p>
        <p>This is a state {counter}</p>
    </div>
  )
}

export default Footer;