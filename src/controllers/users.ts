import { Request,Response,NextFunction } from "express";
import { ApiError } from "../error/error";
import { DbContex } from "../db";
import { User } from "../entitys/User";
import bcrypt from '../middlewares/bcryptMiddleware'
import jwt from "../middlewares/jwtMiddleware";

class UserController{
    static async register(req:Request,res:Response,next:NextFunction){
        try{
            const {name,login,password} = req.body
            if(!name || !login || !password){
                return next(ApiError.badData())
            }
            const userRepo = DbContex.getRepository(User)
            const hashPassword = await bcrypt.crypt(password)
            const findUser = await userRepo.findOne({where:{login:login}})
            if(findUser){
                return res.status(200).json('user have be')
            }
            const newUser = userRepo.create({name:name,login:login,password:hashPassword})
            const savedUser = await userRepo.save(newUser)
            return res.status(201).json({id:savedUser.id})
        }
        catch(err){
            console.log(err)
            next(ApiError.internalServerError(err))
        }
    }
    static async login(req:Request,res:Response,next:NextFunction){
        try{
            const {login, password} = req.body
            if(!login || !password){
                return next(ApiError.badData())
            }
            const userRepo = DbContex.getRepository(User)
            const findUser = await userRepo.findOne({where:{login:login}})
            if(!findUser){
                return next(ApiError.userNotFound())
            }
            const result = await bcrypt.uncrupt(password,findUser.password)
            if(!result){
                return next(ApiError.notCorrectPassword())
            }
            const token = jwt.createJWT(findUser)
            return res.status(200).cookie('key',token,{maxAge:1000*60*60*24}).json('OK')
        }
        catch(err){
            console.log(err)
            return next(ApiError.internalServerError(err))
        }
    }

    static async logout(req:Request,res:Response,next:NextFunction){
        try{
            res.status(200).cookie('key','',{maxAge:0}).json('OK')
        }
        catch(err){
            console.log(err)
            return next(ApiError.internalServerError(err))
        }
    }

    static async uploadImg(req:Request,res:Response,next:NextFunction){
        try{
            const id = req.body.id
            const parseId = parseInt(id)
            const {img} = JSON.parse(JSON.stringify(req.files as Express.Multer.File[]))
            if(!img){
                return res.status(200).json("NO File")
            }
            if(!id || isNaN(parseId)){
                return next(ApiError.badData())
            }

            const userRepo = DbContex.getRepository(User)
            const findUser = await userRepo.findOne({where:{id:parseId}})
            if(!findUser){
                return next(ApiError.badRequest())
            }
            userRepo.update(findUser,{img:`/ava/${img[0].filename}`})

            res.status(201).json("OK")
        }
        catch(err){
            console.log(err)
            return next(ApiError.internalServerError(err))
        }
    }
}

export default UserController