import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bader from './components/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Bader />
    </>
  )
}

export default App
