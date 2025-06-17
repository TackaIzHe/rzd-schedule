import express, { Errback, NextFunction, Request, Response } from 'express'
import path from 'path'
import routers from './routers/index'
import { DbContex } from './db'
const errorMiddleware = require('./middlewares/errorMiddleware')
require('dotenv').config({path:'src/.env'})
const app = express()
const port = process.env.PORT || 2050

app.use(express.json())

app.use(express.static(__dirname+'/public'))
app.use(routers)

app.use(errorMiddleware)

DbContex.initialize()
.then(()=>{
    app.listen(port,()=>{
        console.log(`server started http://localhost:${port}`)
    })
})
.catch((err)=>{
    console.log(err)
})