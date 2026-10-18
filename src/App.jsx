import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleClick = () => {
    const trimmedName = name.trim()
    setMessage(trimmedName ? `Hello, ${trimmedName}!` : 'Please enter your name.')
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Greet</button>
      <h2>{message}</h2>
    </div>
  )
}

export default App
