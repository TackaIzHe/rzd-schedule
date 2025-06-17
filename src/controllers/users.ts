import { Request,Response,NextFunction } from "express";
import { ApiError } from "../error/error";
class User{
    static async register(req:Request,res:Response,next:NextFunction){
        try{
            next(ApiError.badRequest())
            //res.status(201).json()
        }
        catch(err){

        }
    }
    static async login(req:Request,res:Response,next:NextFunction){
        res.status(200).json(req.body.login)
    }
    static async uploadImg(req:Request,res:Response,next:NextFunction){
        console.log(1231)
        console.log()
        res.status(200).json(req.file?.filename)
    }
}

export default User