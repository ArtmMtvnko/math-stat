import { useEffect, useState } from 'react'
import { dataArray } from './services/data'
import Temperature from './components/Temperature'
import './App.css'

function App() {
  const [temperatures, setTemperatures] = useState([])
  const minTemp = temperatures[0]
  const maxTemp = temperatures[temperatures.length - 1]

  useEffect(() => {
    console.log(dataArray)
    setTemperatures(dataArray.toSorted())
  }, [])

  return (
    <>
      <h1>Lab 1</h1>
      <h3>
        Розмах вибірки: {temperatures.length === 0 ? '--' : maxTemp - minTemp}
      </h3>
      <div className="tables-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>N_i</th>
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
              <th>N_i</th>
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
