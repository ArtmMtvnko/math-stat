import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { useMemo } from 'react'

const BarChart = ({ data }) => {
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
                if (tableRow.floor < value && tableRow.ceil >= value) {
                    tableRow.count += 1
                    break
                }
            }
        }

        return table
    }, [data])

    console.log(intervalTable)
    return (
        <Bar 
            datasetIdKey='uuid'
            data={{
                labels: intervalTable.map(row => row.average),
                datasets: [
                    {
                        label: 'bar label',
                        data: intervalTable.map(row => row.average)
                    }
                ]
            }}
        />
    )
}

export default BarChart