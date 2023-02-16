import {Route, Routes} from "react-router-dom"
import { CardPage } from './counter/CardPage'
import { NavBar } from "./counter/NavBar"
import {Page} from './counter/Page'


function App() {
  return (
    <div className="">
    <NavBar />
    <Routes>
      <Route path="/" element={<CardPage/>} />
      <Route path="/page" element={<Page/>} />
    </Routes>
  </div>
  )
}

export default App
