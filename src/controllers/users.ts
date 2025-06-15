import { Request,Response,NextFunction } from "express";
class User{
    static async register(req:Request,res:Response,next:NextFunction){
        res.status(201).json({log:req.body})
    }
    static async login(req:Request,res:Response,next:NextFunction){
        res.status(200).json(req.body.login)
    }
}

export default User