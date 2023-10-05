const fs = require('fs')
const path = require('path')

const directory = path.join(__dirname, 'Logs')

// Creating a Logs directory, if it does not already exist
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
}

// Change the current process to the new Logs directory
process.chdir(directory)

// Creating 10 log files and writing some text into the files
for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`
    const filePath = path.join(directory, fileName)
    const text = `log file ${i}.`

    fs.writeFileSync(filePath, text)
    console.log(fileName)
}
