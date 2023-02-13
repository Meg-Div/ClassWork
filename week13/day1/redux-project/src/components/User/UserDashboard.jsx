import React from 'react'
import { UserProfile } from '../User/UserSettings'

export const UserDashboard = ({userLoggedIn, userSite}) => {
  return (
    <div>UserDashboard

        <UserProfile userLoggedIn={userLoggedIn} userSite={userSite} />
    </div>
  )
}
