const fs = require("fs")
const path = require("path")

async function sinxronlashdirma(){
    const function1 = await new Promise((resolve) => {
        fs.writeFile(path.join(__dirname,"text1.txt"),"TXT1 DATA",(err)=>{
            if (err){
                throw err
            }
            resolve("function1 resolved")
        })
    })
    console.log(function1)

    const function2 = await new Promise((resolve) => {
        fs.readFile(path.join(__dirname,"text1.txt"),(err,data) => {
            if (err){
                throw err
            }
            console.log("Data from text1.txt saved to function2 variable")
            resolve(data)
        })
    })
    console.log(function2.toString())

    const function3 = await new Promise((resolve) => {
        fs.writeFile(path.join(__dirname,"text2.txt"), function2.toString(),(err)=>{
            if (err) throw err
            resolve("data from function2(text1.txt) has been written to text2.txt")
        })
    })
    console.log(function3)

}
sinxronlashdirma()
