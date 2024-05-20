import { useRef } from "react"
import parseCSV from "../utils/parser"
import Papa from 'papaparse'

const FileLoader = ({ data, setData }) => {
    const inputRef = useRef(null)

    const handleClick = () => {
        Papa.parse(inputRef.current.files[0],
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
                setData(selectedData)
            }
        })
    }

    return (
        <div>
            <input ref={inputRef} id="fileLoader" type="file" accept=".csv" />
            <button onClick={handleClick}>Analysis</button>
        </div>
    )
}

export default FileLoader