import React from 'react'
import { useLocation } from 'react-router-dom';


export const Account = () => {
  const location = useLocation();
  return (
    <div>Currently reading: {location?.state?.name} </div>
  )
}
