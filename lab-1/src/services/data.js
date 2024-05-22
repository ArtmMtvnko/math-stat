import dataObj from './../assets/data.json'

export const data = dataObj.data

export const dataEntries = Object.entries(data)

export const dataArray = []
for (const year in data) {
    if (Object.hasOwnProperty.call(data, year)) {
        dataArray.push(data[year])
    }
}