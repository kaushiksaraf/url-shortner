const express = require ('express')
const app= express()

app.get ("/",(req,res)=> {
    res.send("Hello ,Welcome to my url shortner project   ,type /i to know info on endpoints")
})

app.get("/i",(req,res)=> {
    res.send("hi there, type above after the link /i/google to go to google homepage and /i/github to go to github page")
})
app.get ("/i/google",(req,res)=> {
    res.send("Hers the link to Google Homepage ,www.google.com")
})
app.get ("/i/github",(req,res)=> {
    res.send("Hers the link to Github Homepage ,www.github.com")
})
const port = 5000
app.listen(port,()=> {
    console.log(`listening on port,${port}` )
})