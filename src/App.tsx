import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Register } from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/register/*" element={<Register />} />
      </Routes>
      </Routes>
    </BrowserRouter>
  )
}

export default App
