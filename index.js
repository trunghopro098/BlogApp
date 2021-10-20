const express = require("express")
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('hello world ! my nsme is trung')
})

app.listen(port,()=>{
    console.log(`Example listening at http://localhost:${port}`)
})