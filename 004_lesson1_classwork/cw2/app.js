const fs = require("fs")
const path = require("path")

async function sync(){
    const function1 = await new Promise((resolve) => {
        fs.writeFile(path.join(__dirname,"text1.txt"), "Salam, mənim adım Cahangirdir.", (err) => {
            if (err){
                throw err
            }
            resolve("text1.txt created and filled")
        })
    })
    console.log(function1)
    const function2 = await  new Promise((resolve)=> {
        fs.readFile(path.join(__dirname,"text1.txt"),"utf-8",(err,data) => {
            if (err){
                throw err
            }
            console.log("text1.txt inner text copied to variable named function2")
            resolve(data)
        })
    })
    console.log("text1.txt inner text was :", function2.toString())
    const function3 = await  new Promise((resolve)=> {
        fs.mkdir(path.join(__dirname, "newFolder"), (err) => {
            if(err){
                console.log("--- MKDIR ERROR",err)
                resolve("newFolder already exist, that is why error occurred BUT this is not a big deal")
            }
            else resolve("new directory named newFolder created")
        })
    })
    console.log(function3)
    const function4 = await  new Promise((resolve)=> {
        fs.writeFile(path.join(__dirname, "newFolder", "text2.txt"), function2.toString(), (err) => {
            if(err){
                throw err
            }
            resolve("pre-converted to string function2 variable copied to text2.txt in new folder named newFolder")
        })
    })
    console.log(function4)
    const function5 = await new Promise((resolve) => {
        fs.unlink(path.join(__dirname,"text1.txt"),(err) => {
            if (err) throw err
            resolve("text1.txt unlinked")
        })
    })
    console.log(function5)
}
sync()