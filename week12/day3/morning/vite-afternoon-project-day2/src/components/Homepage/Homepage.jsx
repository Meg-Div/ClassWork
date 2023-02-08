import React from 'react'
import { Link } from 'react-router-dom';

export const Homepage = ({user}) => {
  const book = {name: "Art of War"};

  return (
    <div>
    <Link to="/account" state={book}> 
    Got to Account with book info
    </Link>
    </div>
  )
}
