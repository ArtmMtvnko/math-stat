import { useEffect, useState } from 'react'
import { dataArray } from './services/data'
import TableRow from './components/TableRow'
import './App.css'
import BarChart from './components/BarChart'
import FileLoader from './components/FileLoader'
import LineChart from './components/LineChart'

function App() {
  const [data, setData] = useState([])
  const minValue = Math.min(...data)
  const maxValue = Math.max(...data)

  useEffect(() => {
    console.log(dataArray)
    setData(dataArray.toSorted())
    const reader = new FileReader()
  }, [])

  return (
    <>
      <h1>Lab 1</h1>
      <FileLoader data={data} setData={setData} />
      <h3>
        Розмах вибірки: {data.length === 0 ? '--' : (maxValue - minValue).toFixed(4)}
      </h3>
      <div className="tables-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>№</th>
              <th>Capacity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, i) =>
              <TableRow key={i} index={i + 1} value={value} />
            )}
          </tbody>
        </table>

        <table className="table">
          <thead>
            <tr>
              <th>№</th>
              <th>Capacity (sorted)</th>
            </tr>
          </thead>
          <tbody>
            {data.toSorted((a, b) => a - b).map((value, i) =>
              <TableRow key={i} index={i + 1} value={value} />
            )}
          </tbody>
        </table>
        
        <div style={{width: 800}}>
          <LineChart data={data} />
          <BarChart data={data} />
        </div>
      </div>
    </>
  )
}

export default App
