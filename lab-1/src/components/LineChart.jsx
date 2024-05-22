import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const LineChart = ({ data, labels }) => {
    return (
        <Line 
            datasetIdKey='id'
            data={{
                labels: [...labels],
                datasets: [
                    {
                        label: 'some label',
                        data: [...data],
                        tension: 0.2
                    }
                ]
            }}
        />
    )
}

export default LineChart