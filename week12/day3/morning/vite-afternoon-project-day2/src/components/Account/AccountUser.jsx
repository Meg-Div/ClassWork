import React from 'react'
import {useParams} from "react-router-dom"

export const AccountUser = () => {
    const {id} = useParams()
  return (
    <div><h1>Account for param: {id} </h1></div>
  )
}
