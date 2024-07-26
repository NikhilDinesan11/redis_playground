const client = require('./client')


async function init(){
    await client.set("message:6", "Hey from Nodejs")
    const res = await client.get("message:1")
    console.log("Result ->",res)
}


init()