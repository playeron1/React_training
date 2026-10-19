import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message] = useState('Hello world')

  useEffect(() => {
    console.log('Hello world')
  }, [])

  return <h1>{message}</h1>
}

export default App
