import { Request, Response, NextFunction } from "express";

class Schedules{
    static async getAll(req:Request,res:Response,next:NextFunction){
        res.status(200).json('hello')
    }
    static async get(req:Request,res:Response,next:NextFunction){
        res.status(200).json(req.params.from+req.params.to)
    }
    static async post(req:Request,res:Response,next:NextFunction){
        res.status(200).json(req.body)
    }
}
export default Schedules