import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increment, decrement, incrementByAmount} from "../../reducers/CounterSlice"

import {changeUserName, changeUserSettingsLight, changeUserSettingsDark } from  "../../reducers/UserSlice"

export const UserSettings = () => {
    const counter = useSelector((state) => state.counter.value);
    const userLoggedIn = useSelector((state) => state.user.value);

    const dispatch = useDispatch();
  return (
    <div>
        <h3>the counter is at {counter} </h3>
        <button onClick={()=> dispatch(increment())}>increment</button>
        <button onClick={()=> dispatch(decrement())}>decrement</button>
        <button onClick={()=> dispatch(incrementByAmount(2))}>increment by 2</button>
        <button onClick={()=> dispatch(changeUserName())}>change</button>

     </div>

  )
}

export default UserSettings