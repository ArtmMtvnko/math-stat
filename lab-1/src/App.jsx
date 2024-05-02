import { useEffect } from 'react'
import { dataArray } from './services/data'
import './App.css'

function App() {

  useEffect(() => {
    console.log(dataArray)
  }, [])

  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
