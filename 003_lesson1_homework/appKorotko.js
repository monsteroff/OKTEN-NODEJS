const fs = require("fs")
const path = require("path")

const arr1 = [{"name" : "Cahangir","age" : 27,"city" : "Baku"},{"name" : "Orxan","age" : 28,"city" : "Baku"}]
let file1Text = ""
let file2Text = ""

for(let i = 0 ; i < 0 ; i++){
    for (const key in arr1[i]) {
        if (Object.hasOwnProperty.call(arr1[i], key)) {
            const val = arr1[i][key]
            if (i === 0) file1Text += key.toString().toUpperCase() + " : " + val.toString().toUpperCase() + "\n"
            else file2Text += key.toString().toUpperCase() + " : " + val.toString().toUpperCase() + "\n"
        }
    }
}

async function sync(){
    await new Promise((resolve)=>{
        fs.mkdir(path.join(__dirname,"main","inPerson"), {recursive:true}, (err) => {
            if (err) throw err
            resolve("Created main>inPerson directories")
        })
    })
    await new Promise((resolve) => {
        fs.mkdir(path.join(__dirname,"main","online"),{recursive:true},(err) => {
            if (err) throw err
            resolve("Created online inside of main")
        })
    })
    await new Promise((resolve) => {
        fs.writeFile(path.join(__dirname,"main","inPerson", "inPersonUsers.txt"), file1Text, (err) =>{
            if (err) throw err
            resolve("Created txt file inside of inPerson and wrote info about 1st user")
        })
    })
    await new Promise((resolve) => {
        fs.writeFile(path.join(__dirname,"main","online", "onlineUsers.txt"), file2Text, (err) =>{
            if (err) throw err
            resolve("Created second file inside of online and wrote info about 2nd user")
        })
    })
    let func5 = await new Promise((resolve) => {
        fs.readFile(path.join(__dirname, "main", "inPerson", "inPersonUsers.txt"), "utf8", (err,data) => {
            if (err) throw err
            resolve(data)
        })
    })
    let func6 = await new Promise((resolve) => {
        fs.readFile(path.join(__dirname, "main", "online", "onlineUsers.txt"), "utf8", (err,data) => {
            if (err) throw err
            resolve(data)
        })
    })
    await new Promise((resolve) => {
        fs.writeFile(path.join(__dirname, "main", "online", "onlineUsers.txt"), func5.toString(), (err) =>{
            if (err) throw err
            resolve("Finished 2nd file")
        })
    })
    await new Promise((resolve) => {
        fs.writeFile(path.join(__dirname, "main", "inPerson", "inPersonUsers.txt"), func6.toString(), (err) =>{
            if (err) throw err
            resolve("Finished 1st file")
        })
    })
}
sync().then(v => v)