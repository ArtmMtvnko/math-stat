import Papa from 'papaparse'

export default function parseCSV(file, column) {
    Papa.parse(file,
    {
        // header: true,
        skipEmptyLines: true,
        complete: function(results) {
            const size = results.data.length
            const step = Math.floor(size / 100)

            const selectedData = []

            for (let i = 0; i < step * 100; i += step) {
                selectedData.push(results.data[i][2])
            }

            console.log(selectedData)
            return selectedData
        }
    })
    
}