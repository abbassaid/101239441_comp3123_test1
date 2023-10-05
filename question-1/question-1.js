const lowerCaseWords = (array) => {

    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
            return reject("You did not provide an array")
        }

        const onlyStrings = array.filter((inputs) => typeof inputs === "string")

        if (onlyStrings.length === 0) {
            reject ("There were no strings found in the array")
        }

        const lowercaseStrings = onlyStrings.map((words) => words.toLowerCase())
        resolve(lowercaseStrings)

    })

}

const array = ["PIZZA", 3, false, "Wings", 24]

lowerCaseWords(array)
    .then((result) => {
    console.log(result)
    })
    .catch((error) => {
        console.error("Error:", error)
    })