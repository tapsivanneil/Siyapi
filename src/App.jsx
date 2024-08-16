
// Components
import { HashRouter as Router, Routes, Route } from "react-router-dom"

// Pages
import { Cart } from "./Pages/Cart"
import { Profile } from "./Pages/Profile"
import { Home } from "./Pages/Home"

function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </>

  )
}

export default App
