import { Errback, NextFunction, Request, Response } from "express";
import { ApiError } from "../error/error";

module.exports = ((err:Errback,req:Request,res:Response,next:NextFunction)=>{
    if(err instanceof ApiError){
        return res.status(err.status).json(err.message)
    }
})