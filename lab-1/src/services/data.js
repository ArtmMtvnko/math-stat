import dataObj from './../assets/data.json'

export const data = dataObj.data

export const dataEntries = Object.entries(data)

export const dataArray = []
for (const year in data) {
    if (Object.hasOwnProperty.call(data, year)) {
        dataArray.push(data[year])
    }
}

const min = Math.min(...dataArray)
const max = Math.max(...dataArray)

const intervalCount = Math.round(1 + 3.3221 * Math.log10(dataArray.length))
const intervalSize = (max - min) / intervalCount
console.log('m', intervalCount)
console.log('k', intervalSize)

export const intervalTable = []

let range = Math.min(...dataArray)
let floor = 0
let ceil = 0

for (let i = 0; i < intervalCount; i++) {
    floor = range.toFixed(2)
    ceil = (range += intervalSize).toFixed(2)
    intervalTable.push({
        floor: floor,
        ceil: ceil,
        average: ((+floor + +ceil) / 2).toFixed(2),
        count: 0
    })
}

for (const value of dataArray) {
    for (const tableRow of intervalTable) {
        if (tableRow.floor < value && tableRow.ceil >= value) {
            tableRow.count += 1
            break
        }
    }
}

console.log(intervalTable)