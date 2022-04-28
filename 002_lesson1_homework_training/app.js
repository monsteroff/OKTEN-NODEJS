const fs = require("fs")
const path = require("path")

for (let i = 0 ; i <2 ; i++) {
    fs.mkdir(path.join(__dirname, "main", `${i === 0 ? "online":"inPerson"}`),{recursive:true},(err) => {
        if(err){
            console.log(err)
            throw err
        }
    })
}

for (let i = 0 ; i < 2 ; i++){
    fs.appendFile(path.join(__filename),
        `\n\nlet ${i === 0 ? "onlineUsers" : "inPersonUsers"} = [{"name":"user${i+1}","age":${Math.ceil(Math.random()*12)+17},"city":"Lviv"}]`,
        err => {
            if (err) {
                console.log(err)
                throw err
            }
        }
    )
}

fs.readFile(path.join(__filename),(err,data) => {
    if (err) {
        console.log(err)
        throw err
    }
    else {
        const us1 = JSON.parse(data.toString().split("let onlineUsers = [")[2].split("]")[0])
        const us2 = JSON.parse(data.toString().split("let inPersonUsers = [")[2].split("]")[0])
        let file1Text = ""
        let file2Text = ""
        for (const us1Key in us1) {
            file1Text += `${us1Key}`.toUpperCase() + ": " + us1[`${us1Key}`].toString() + "\n"
        }
        for (const us2Key in us2) {
            file2Text += `${us2Key}`.toUpperCase() + ": " + us2[`${us2Key}`].toString() + "\n"
        }
        for (let i = 0; i < 2; i++){
            fs.appendFile(
                path.join(__dirname, "main", `${i === 0 ? "inPerson" : "online"}`, `${i === 0 ? "inPersonUsers.txt" : "onlineUsers.txt"}`),
                `${
                    i === 0 ?
                        `${file1Text.toString()}`:
                        `${file2Text.toString()}`
                }`,
                {flag:"a"},
                err => {
                    if (err) {
                        console.log(err)
                        throw err
                    }
                }
            )
        }
    }
})
//
// fs.readFile(path.join(__dirname,"test.txt"),(err) => {
//     if(err){
//         console.log(err)
//         throw err
//     }
// })

// fs.readFile(path.join(__dirname, "main", "inPerson", "inPerson.txt"),"utf8", (err,data) => {
//     if (err) {
//         console.log(err)
//         throw err
//     }
//     console.log(data.toString())
// })

let onlineUsers = [{"name":"user1","age":28,"city":"Lviv"}]

let inPersonUsers = [{"name":"user2","age":21,"city":"Lviv"}]

let onlineUsers = [{"name":"user1","age":26,"city":"Lviv"}]

let inPersonUsers = [{"name":"user2","age":24,"city":"Lviv"}]