import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'
import Header from './component/header'
import Footer from './component/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
    <Navbar />
   <Header/>
    </div>
  )
}

export default App
