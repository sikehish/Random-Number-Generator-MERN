import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [randomNumber, setRandomNumber] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchRandomNumber()
  }, [])

  const fetchRandomNumber = async () => {
    setLoading(true)
    setError(null)
    const SERVER_PORT=7000;
    try {
      const response = await fetch(`http://localhost:${SERVER_PORT}/api/random`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      setRandomNumber(data.number)
    } catch (error) {
      console.error('Error fetching random number:', error)
      setError(error.message)
      setTimeout(() => setError(null), 3000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <h1>Random Number Generator</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="random-number">{randomNumber}</p>
          <button onClick={fetchRandomNumber}>Generate New Number</button>
        </>
      )}
      {error && (
        <div className="error-message">
          Error: {error}
        </div>
      )}
    </div>
  )
}

export default App