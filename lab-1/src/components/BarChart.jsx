import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(annotationPlugin)

const BarChart = ({ data, labels, name }) => {
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            annotation: {
                annotations: {
                    line1: {
                        type: 'line',
                        yMin: 3,
                        yMax: 21,
                        xMin: 1.35,
                        xMax: 2.35,
                        borderColor: 'gray',
                        borderWidth: 2,
                        borderDash: [10, 5],
                        label: {
                            content: 'Mode Line 1',
                            enabled: true,
                            position: 'top'
                        }
                    },
                    line2: {
                        type: 'line',
                        yMin: 13,
                        yMax: 21,
                        xMin: 2.65,
                        xMax: 1.65,
                        borderColor: 'gray',
                        borderWidth: 2,
                        borderDash: [10, 5],
                        label: {
                            content: 'Mode Line 2',
                            enabled: true,
                            position: 'top'
                        }
                    },
                    line3: {
                        type: 'line',
                        yMin: 0,
                        yMax: 17,
                        xMin: 2.13,
                        xMax: 2.13,
                        borderColor: 'gray',
                        borderWidth: 2,
                        borderDash: [10, 5],
                        label: {
                            content: 'Mode Line 2',
                            enabled: true,
                            position: 'top'
                        }
                    },
                    line4: {
                        type: 'line',
                        yMin: 12,
                        yMax: 20,
                        xMin: 5.35,
                        xMax: 6.35,
                        borderColor: 'gray',
                        borderWidth: 2,
                        borderDash: [10, 5],
                        label: {
                            content: 'Mode Line 1',
                            enabled: true,
                            position: 'top'
                        }
                    },
                    line5: {
                        type: 'line',
                        yMin: 16,
                        yMax: 20,
                        xMin: 6.65,
                        xMax: 5.65,
                        borderColor: 'gray',
                        borderWidth: 2,
                        borderDash: [10, 5],
                        label: {
                            content: 'Mode Line 2',
                            enabled: true,
                            position: 'top'
                        }
                    },
                    line6: {
                        type: 'line',
                        yMin: 0,
                        yMax: 18,
                        xMin: 6.12,
                        xMax: 6.12,
                        borderColor: 'gray',
                        borderWidth: 2,
                        borderDash: [10, 5],
                        label: {
                            content: 'Mode Line 2',
                            enabled: true,
                            position: 'top'
                        }
                    }
                }
            }
        }
    };
    return (
        <Bar options={options}
            datasetIdKey='uuid'
            data={{
                labels: [...labels],
                datasets: [
                    {
                        label: name,
                        data: [...data]
                    }
                ]
            }}
        />
    )
}

export default BarChart