import { useState } from 'react'
import Nav from './components/Nav/Nav'
import Content from './components/Content/Content'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Content/>
    </>
  )
}

export default App
