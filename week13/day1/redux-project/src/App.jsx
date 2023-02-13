import { useState } from 'react'
import './App.css'
import { HomePage } from './components/Home/HomePage';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({
    name: "Meg",
    settings: "dark",
    address: "123 Main st",
  });
const [userSite, setUserSite] = useState([{
  name: "Midland",
  hqAddress: "145 Main st",
  waterTransferRate: "2.4",
},
{
  name: "Denver",
  hqAddress: "146 Main st",
  waterTransferRate: "6.4",
}
]);
  return (
    <div className="App">
      <HomePage userLoggedIn={userLoggedIn} userSite={userSite} />
    </div>
  )
}

export default App
