import React from 'react'
import { UserSettings } from '../User/UserSettings'

export const UserProfile = ({userLoggedIn, userSite}) => {
  return (
    <>
        <h1>User Profile</h1>
       {userSite.map((userS) => {
        return (
        <div>
        <h3>Current User Site: {userS.name}</h3>
        <h3>Locatopn: {userS.hqAddress}</h3>
        <h3>Water Transfer Rate: {userS.waterTransferRate}</h3>
        </div>
        );
         })}
    <div>
        <UserSettings userLoggedIn={userLoggedIn} userSite={userSite} />
    </div>
    </>
  );
};
