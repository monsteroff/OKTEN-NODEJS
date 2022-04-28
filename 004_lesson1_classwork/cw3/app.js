// mojete ponasozdavat papok i faylov

const fs = require("fs")
const path = require("path")

async function synchronized(absolutePath) {
    try{
        const execFunk = async (recursivePath = absolutePath) => {
            const executioner = await new Promise((resolve, reject) => {
                fs.readdir(recursivePath, function(err, files) {
                    if (err) {
                        reject(err)
                    } else {
                        if (!files.length) {
                            console.log("--- directory" + recursivePath + " is empty")
                        } else {
                            console.log("--- directory" + recursivePath + " is NOT empty")
                            console.log(files)
                            for (let i = 0 ; i < files.length ; i++){
                                const fullPath = path.join(recursivePath, files[i])
                                const newPath = path.join(recursivePath, ("_new " + files[i]))
                                if(fs.lstatSync(fullPath).isDirectory()){
                                    fs.renameSync(fullPath, newPath)
                                    console.log(files[i] + " renamed to _new " + files[i])
                                    async function goAgain(){
                                        await execFunk(newPath)
                                    }
                                    goAgain()
                                } else {
                                    const currentJSFile = path.basename(__filename)

                                    if (files[i] === currentJSFile) {
                                        console.log("We cannot touch file named : " + currentJSFile)
                                    }
                                    else {
                                        fs.truncateSync(fullPath)
                                        console.log(files[i] + " truncated")
                                    }
                                }
                            }
                            resolve("OK --- No error in executioner fs.readdir")
                        }
                    }
                });
            })
            console.log(executioner)
        }
        await execFunk()
        return "Sync function ended successfully"
    } catch (e) {
        return e
    }
}

synchronized(__dirname).then((value) => {
    console.log(value)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("Program ended, im done")
})