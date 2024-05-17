import { data, dataArray, intervalTable } from '../services/data'
import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const BarChart = () => {
    return (
        <div style={{width: 800}}>
            <Line 
                datasetIdKey='id'
                data={{
                    labels: [...dataArray],
                    datasets: [
                        {
                            label: 'some label',
                            data: [...dataArray],
                            tension: 0.5
                        }
                    ]
                }}
            />
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
        </div>
    )
}

export default BarChart