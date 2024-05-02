import { useEffect, useState } from 'react'
import { dataArray } from './services/data'
import Temperature from './components/Temperature'
import './App.css'

function App() {
  const [temperatures, setTemperatures] = useState([])

  useEffect(() => {
    console.log(dataArray)
    setTemperatures(dataArray.toSorted())
  }, [])

  return (
    <>
      <h1>Hello</h1>
      <h3>
        Розмах вибірки: 
        {temperatures.length === 0
          ? '--'
          : temperatures[temperatures.length - 1] - temperatures[0]
        }
      </h3>
      <div className="tables-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>№</th>
              <th>Temperature</th>
            </tr>
          </thead>
          <tbody>
            {dataArray.map((temperature, i) =>
              <Temperature key={i} index={i + 1} temperature={temperature} />
            )}
          </tbody>
        </table>

        <table className="table">
          <thead>
            <tr>
              <th>№</th>
              <th>Temperature (sorted)</th>
            </tr>
          </thead>
          <tbody>
            {temperatures.map((temperature, i) =>
              <Temperature key={i} index={i + 1} temperature={temperature} />
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
