import express from 'express'
import path from 'path'
require('dotenv').config({path:'src/.env'})
const app = express()
const port = process.env.PORT || 2050

app.use(express.json())

app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.status(200).json(200)
})

app.listen(port,()=>{
    console.log(`server started http://localhost:${port}`)
})