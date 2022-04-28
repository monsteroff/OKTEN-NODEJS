// Odno i toje no s dobavleniem try,catch v async / reject v promisax / then,finally pri vizove funkcii
// pri dobavlenii reject udalil stroki s throw


const fs = require("fs")
const path = require("path")

async function sync(){
    try{
        const function1 = await new Promise((resolve, reject) => {
            fs.writeFile(path.join(__dirname,"text1.txt"), "Salam, mənim adım Cahangirdir.", (err) => {
                if (err) reject(`--- function1 fs.writeFile ${err}`)
                resolve("text1.txt created and filled")
            })
        })
        console.log(function1)
        const function2 = await  new Promise((resolve, reject)=> {
            fs.readFile(path.join(__dirname,"text1.txt"),"utf-8",(err,data) => {
                if (err) reject(`--- function2 fs.readFile ${err}`)
                console.log("text1.txt inner text copied to variable named function2")
                resolve(data)
            })
        })
        console.log("text1.txt inner text was :", function2.toString())
        const function3 = await  new Promise((resolve)=> {
            fs.mkdir(path.join(__dirname, "newFolder"), (err) => {
                if(err){
                    console.log(`--- function3 fs.mkdir ${err}`)
                    resolve("Yes, newFolder already exist, that is why error occurred. But, this is not a big deal for us")
                }
                else resolve("new directory named newFolder created")
            })
        })
        console.log(function3)
        const function4 = await  new Promise((resolve, reject)=> {
            fs.writeFile(path.join(__dirname, "newFolder", "text2.txt"), function2.toString(), (err) => {
                if(err) reject(`--- function4 fs.writeFile ${err}`)
                resolve("pre-converted to string function2 variable copied to text2.txt in new folder named newFolder")
            })
        })
        console.log(function4)
        const function5 = await new Promise((resolve, reject) => {
            fs.unlink(path.join(__dirname,"text1.txt"),(err) => {
                if (err) reject(`--- function5 fs.unlink ${err}`)
                resolve("text1.txt unlinked")
            })
        })
        console.log(function5)
        return "Sync function ended successfully"
    } catch (e) {
        return e
    }
}

sync().then((value) => {
    console.log(value)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("Program ended, im done")
})