
import { Account } from './components/Account/Account'
import { Homepage } from './components/Homepage/Homepage'
import { Navbar } from './components/Navbar/Navbar'
import { Route, Routes} from "react-router-dom"
import { ErrorPage } from './components/ErrorPage/ErrorPage'
import { AccountSettings } from './components/Account/AccountSettings'
import { AccountUser } from './components/Account/AccountUser'


function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/account">
          <Route index element= {<Account />} />
          <Route path="settings" element={<AccountSettings />} />
          <Route path=":id" element={<AccountUser />} />
          </Route>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      </>
  )
}

export default App
