
// Components
import { NavBar } from "./Components/NavBar"
import { HashRouter as Router, Routes, Route } from "react-router-dom"

// Pages
import { Cart } from "./Pages/Cart"
import { Profile } from "./Pages/Profile"

function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/"/>
        </Routes>
      </Router>


    <NavBar/>
    </>

  )
}

export default App
