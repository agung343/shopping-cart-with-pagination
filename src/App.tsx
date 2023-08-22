import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header/Header"

import "./app.module.scss"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  )
}

export default App
