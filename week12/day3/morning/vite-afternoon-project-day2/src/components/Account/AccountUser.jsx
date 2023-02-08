import React from 'react'
import {useParams} from "react-router-dom"


export const AccountUser = () => {
    const {id} = useParams()
    const book = { name: "Goblet" };
    /*
    const fetchUserList = async() => {
        //fetch using id above
    }
    */
  return (
    <div><h1>Account for param: {id} </h1>
    <Link to="/account" state={book}> 
    Got to Account with book info 
    </Link>
    </div>
  )
}
