import { NextFunction, Request, Response } from "express";
import { ApiError } from "../error/error";
import { DbContex } from "../db";
import { Station } from "../entitys/Station";
import { Not } from "typeorm";

export default class {
    static async get(req:Request,res:Response,next:NextFunction){
        try{
            const stationRepo = DbContex.getRepository(Station)
            const findStation = await stationRepo.find({where:{direction:Not('')}})
            res.status(200).json(findStation.map((x)=>{
                return(
                    {
                        direction:x.direction,
                        title:x.title
                    }
                )
            }))
        }
        catch(err){
            console.log(err)
            return next(ApiError.internalServerError(err))
        }
    }
}