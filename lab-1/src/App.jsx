import { useEffect, useState, useMemo } from 'react'
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

  const intervalTable = useMemo(() => {
    const table = []

    const min = Math.min(...data)
    const max = Math.max(...data)

    const intervalCount = Math.round(1 + 3.3221 * Math.log10(data.length))
    const intervalSize = (max - min) / intervalCount
    console.log('m', intervalCount)
    console.log('k', intervalSize)

    let range = min
    let floor = 0
    let ceil = 0

    for (let i = 0; i < intervalCount; i++) {
        floor = range.toFixed(2)
        ceil = (range += intervalSize).toFixed(2)
        table.push({
            floor: floor,
            ceil: ceil,
            average: ((+floor + +ceil) / 2).toFixed(2),
            count: 0
        })
    }
    
    for (const value of data) {
        for (const tableRow of table) {
            if (tableRow.floor < Number(value) && tableRow.ceil >= Number(value)) {
                tableRow.count += 1
                break
            }
        }
    }
    console.log(table)
    return table
  }, [data])

  useEffect(() => {
    console.log(dataArray)
    setData(dataArray.toSorted())
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
          <LineChart labels={intervalTable.map(row => row.average)} data={intervalTable.map(row => row.count)}/>
          <BarChart labels={intervalTable.map(row => row.average)} data={intervalTable.map(row => row.count)} />
        </div>
      </div>
    </>
  )
}

export default App
