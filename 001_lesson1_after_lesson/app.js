// const helper = require("./helper")
// helper.greeting("Cahangir")

// const {greeting} = require("./helper")
// greeting("Cahangir")

// console.log("--- Absolute path to file", __filename)
// console.log("--- Path to file folder", __dirname)


// const {test} = require("./test/helper")
//
// test()
//
// console.log("-- app dirname", __dirname)
// console.log("-- app cwd", process.cwd())


// require("./test/helper")
//
// console.log(name)

// const path = require("path")

// const joinedPath = path.join(__dirname, "test2", "files", "public", "text.txt")
// console.log(joinedPath)

// const normalizePath = path.normalize("test///files/public/////text.txt")
// console.log("-- normalized",normalizePath)
//
// const resolvePath = path.resolve("test///files/public/////text.txt")
// console.log("-- resolved", resolvePath)

// const os = require("os")

// console.log(os.cpus())
// console.log(os.cpus().length)
// console.log(os.arch())




// const fs = require("fs")
// const path = require("path")

// fs.writeFileSync(path.join(__dirname, "files", "file.txt"), "SOME DATA")
// fs.writeFile(path.join(__dirname, "files", "file2.txt"), "SOME DATA 2", (err) =>{
//     if (err) {
//         console.log(err)
//         throw err
//     }
// })

// fs.readFile(path.join(__dirname, "files", "file2.txt"),"utf8", (err,data) => {
//     if (err) {
//         console.log(err)
//         throw err
//     }
//
//     console.log(data.toString())
// })

// fs.appendFile(path.join(__dirname, "files", "file2.txt"), "\nNEW DATA", (err => {
//     if (err) {
//         console.log(err)
//         throw err
//     }
// }))

// for (let i = 0; i < 1000; i++){
//     fs.appendFile(path.join(__dirname, "files", "file2.txt"), `\nNEW DATA${i}`, {flag:"a"}, (err => {
//         if (err) {
//             console.log(err)
//             throw err
//         }
//     }))
// }

// fs.truncate(path.join(__dirname, "files", "file2.txt"),(err) => {
//     if (err){
//         console.log(err)
//         throw err
//     }
// })

// fs.unlink(path.join(__dirname, "files", "file2.txt"), (err => {
//     if (err){
//         console.log(err)
//         throw err
//     }
// }))

// let text = "";
// for (let i = 0; i < 10 ; i++){
//     if(i !== 9) text += `NEW DATA${i}\n`
//     else text += `NEW DATA${i}`
// }
// fs.appendFile(path.join(__dirname, "files", "file2.txt"), text, {flag:"a"}, (err => {
//     if (err) {
//         console.log(err)
//         throw err
//     }
// }))

// fs.mkdir(path.join(__dirname, "public", "files", "test", "test2"),{recursive:true},(err) => {
//     if(err){
//         console.log(err)
//     }
// })

// fs.rmdir(path.join(__dirname, "test2"),(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// fs.rmdir(path.join(__dirname, "public", "files", "test", "test2"),(err) => {
//     if(err){
//         console.log(err)
//     }
// })

// fs.readdir(path.join(__dirname, "test2"),(err,data)=>{
//     if (err){
//         console.log(err)
//     }
//     console.log(data)
// })

// fs.rename(path.join(__dirname, "test2", "test2.txt"), path.join(__dirname, "test2", "test3.txt"), err => {
//     if (err){
//         console.log(err)
//     }
// })

// a eto dla toqo chto perenesti fayl
// fs.rename(path.join(__dirname, "test2", "test3.txt"), path.join(__dirname, "test3.txt"), err => {
//     if (err){
//         console.log(err)
//     }
// })