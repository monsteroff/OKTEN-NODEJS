const fs = require("fs/promises")
const path = require("path")

const users = [{"name": "Cahangir", "age": 27, "city": "Baku"}, {"name": "Orxan", "age": 28, "city": "Baku"}]
let inPersonUsersText = ""
let onlineUsersText = ""

for (let i = 0; i < users.length; i++) {
    for (const key in users[i]) {
        if (Object.hasOwnProperty.call(users[i], key)) {
            const val = users[i][key]
            if (i === 0) inPersonUsersText += key.toString().toUpperCase() + " : " + val.toString().toUpperCase() + "\n"
            else onlineUsersText += key.toString().toUpperCase() + " : " + val.toString().toUpperCase() + "\n"
        }
    }
}

async function sync() {
    await fs.mkdir(path.join(__dirname, "main", "inPerson"), {recursive: true})
    await fs.mkdir(path.join(__dirname, "main", "online"), {recursive: true})
    await fs.writeFile(path.join(__dirname, "main", "inPerson", "inPersonUsers.txt"), inPersonUsersText)
    await fs.writeFile(path.join(__dirname, "main", "online", "onlineUsers.txt"), onlineUsersText)
    const dataFromIPU = await fs.readFile(path.join(__dirname, "main", "inPerson", "inPersonUsers.txt"), "utf8")
    const dataFromO = await fs.readFile(path.join(__dirname, "main", "online", "onlineUsers.txt"), "utf8")
    await fs.writeFile(path.join(__dirname, "main", "online", "onlineUsers.txt"), dataFromIPU.toString())
    await fs.writeFile(path.join(__dirname, "main", "inPerson", "inPersonUsers.txt"), dataFromO.toString())
}

sync().then()