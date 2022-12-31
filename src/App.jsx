import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { Meme } from './Components/Meme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  )
} 

export default App
