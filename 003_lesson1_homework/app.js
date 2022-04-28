const fs = require("fs")
const path = require("path")

const arr1 = [{
    "name" : "Cahangir",
    "age" : 27,
    "city" : "Baku"
}]

const arr2 = [{
    "name" : "Orxan",
    "age" : 28,
    "city" : "Baku"
}]

let file1Text = ""
let file2Text = ""

for (const key in arr1[0]) {
    if (Object.hasOwnProperty.call(arr1[0], key)) {
        const value = arr1[0][key]
        const textKey = key.toString().toUpperCase()
        const textValue = value.toString().toUpperCase()
        const fileLine = textKey + " : " + textValue + "\n"
        file1Text += fileLine
    }
}
for (const key in arr2[0]) {
    if (Object.hasOwnProperty.call(arr2[0], key)) {
        const value = arr2[0][key]
        const textKey = key.toString().toUpperCase()
        const textValue = value.toString().toUpperCase()
        const fileLine = textKey + " : " + textValue + "\n"
        file2Text += fileLine
    }
}

file1Text = file1Text.slice(0, -1)
file2Text = file2Text.slice(0, -1)

async function sinxronlashdirma(){
    let timeInMillis = new Date().getMilliseconds()

    let func1 = await new Promise((resolve)=>{
        fs.mkdir(path.join(__dirname,"main","inPerson"), {recursive:true}, (err) => {
            if (err) throw err
            resolve("Sozdal papku main, i inPerson vnutri neqo")
        })
    })

    console.log(new Date().getMilliseconds() - timeInMillis)
    console.log(func1)

    let func2 = await new Promise((resolve) => {
        fs.mkdir(path.join(__dirname,"main","online"),{recursive:true},(err) => {
            if (err) throw err
            resolve("Sozdal papku online vnutri papki main")
        })
    })

    console.log(new Date().getMilliseconds() - timeInMillis)
    console.log(func2)

    let func3 = await new Promise((resolve) => {
        fs.writeFile(path.join(__dirname,"main","inPerson", "inPersonUsers.txt"), file1Text, (err) =>{
            if (err) throw err
            resolve("Sozdal txt fayl v papke inPerson i zapisal v neqo dannie 1qo usera")
        })
    })

    console.log(new Date().getMilliseconds() - timeInMillis)
    console.log(func3)

    let func4 = await new Promise((resolve) => {
        fs.writeFile(path.join(__dirname,"main","online", "onlineUsers.txt"), file2Text, (err) =>{
            if (err) throw err
            resolve("Sozdal txt fayl v papke online i zapisal v neqo dannie 2qo usera")
        })
    })

    console.log(new Date().getMilliseconds() - timeInMillis)
    console.log(func4)

    let func5 = await new Promise((resolve) => {
        fs.readFile(path.join(__dirname, "main", "inPerson", "inPersonUsers.txt"), "utf8", (err,data) => {
            if (err) throw err
            console.log("vityanul informaciyu s fayla 1, infa snizu");
            resolve(data.toString())
        })
    })

    console.log(new Date().getMilliseconds() - timeInMillis)
    console.log(func5)

    let func6 = await new Promise((resolve) => {
        fs.readFile(path.join(__dirname, "main", "online", "onlineUsers.txt"), "utf8", (err,data) => {
            if (err) throw err
            console.log("Vityanul informaciyu s fayla 2, infa snizu");
            resolve(data.toString())
        })
    })

    console.log(new Date().getMilliseconds() - timeInMillis)
    console.log(func6)

    let func7 = await new Promise((resolve) => {
        fs.writeFile(path.join(__dirname, "main", "online", "onlineUsers.txt"), func5, (err) =>{
            if (err) throw err
            console.log("Zapisal dannie ot 1qo txt kotorie bili soxraneni v peremennoy func5 ko 2mu txt");
            resolve("Zakonchil delo so 2m faylom")
        })
    })

    console.log(new Date().getMilliseconds() - timeInMillis)
    console.log(func7)

    let func8 = await new Promise((resolve) => {
        fs.writeFile(path.join(__dirname, "main", "inPerson", "inPersonUsers.txt"), func6, (err) =>{
            if (err) throw err
            console.log("Zapisal dannie ot 2qo txt kotorie bili soxraneni v peremennoy func6 k 1mu txt");
            resolve("Zakonchil delos 1m faylom")
        })
    })

    console.log(new Date().getMilliseconds() - timeInMillis)
    console.log(func8)
}
sinxronlashdirma()