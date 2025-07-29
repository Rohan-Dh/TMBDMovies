import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './collections/MovieList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieList/>
    </>
  )
}

export default App
