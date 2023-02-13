import React from 'react'
import { UserDashboard } from '../User/UserDashboard'

export const HomePage = ({userLoggedIn, userSite}) => {
  return (
    <div>HomePage

<UserDashboard userLoggedIn={userLoggedIn} userSite={userSite}/>
    </div>
  )
}
