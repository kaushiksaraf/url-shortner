const express = require ('express')
const app= express()

app.get ("/",(req,res)=> {
    res.send("Hello ,Welcome to my url shortner project")
})
const port = 5000
app.listen(port,()=> {
    console.log(`listening on port,${port}` )
})