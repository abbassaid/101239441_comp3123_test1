const fs = require('fs')
const path = require('path')

const directory = path.join(__dirname, 'Logs')

// Check if the Logs directory exists
if (fs.existsSync(directory)) {
    // Reading all the files in the Logs directory
    fs.readdirSync(directory).forEach((file) => {
        const currFile = path.join(directory, file)

        // Removing the file
        fs.unlinkSync(currFile)
        console.log(`deleted files...${file}`)
    })

    // Remove the Logs directory
    fs.rmdirSync(directory)
} else {
    console.log('Logs directory does not exist.')
}
