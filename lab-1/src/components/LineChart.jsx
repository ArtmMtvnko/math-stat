import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const LineChart = ({ data }) => {
    const sortedData = data.toSorted((a, b) => a - b)
    return (
        <Line 
            datasetIdKey='id'
            data={{
                labels: [...sortedData],
                datasets: [
                    {
                        label: 'some label',
                        data: [...sortedData],
                        tension: 0.5
                    }
                ]
            }}
        />
    )
}

export default LineChart