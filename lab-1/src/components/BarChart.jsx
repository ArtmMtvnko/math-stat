import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const BarChart = ({ data, labels }) => {
    return (
        <Bar 
            datasetIdKey='uuid'
            data={{
                labels: [...labels],
                datasets: [
                    {
                        label: 'bar label',
                        data: [...data]
                    }
                ]
            }}
        />
    )
}

export default BarChart