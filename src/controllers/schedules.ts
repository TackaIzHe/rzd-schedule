import { Request, Response, NextFunction } from "express";
import {fetchModule} from '../module/yandexApiModule'
import { ApiError } from "../error/error";
import { DbContex } from "../db";
import { Station } from "../entitys/Station";

class Schedules{
    static async get(req:Request,res:Response,next:NextFunction){
        try{
            const api_key = process.env.API_KEY || 'API ключ яндекс расписания'
            const {from,to} = req.params
            if(!from || !to){
                return next(ApiError.badData())
            }
            const stationRepo = DbContex.getRepository(Station)
            const fromStation = await stationRepo.findOne({where:{title:from}})
            const toStation = await stationRepo.findOne({where:{title:to}})
            if(!fromStation || !toStation){
                return next(ApiError.badData())
            }
            const responceAPI = await fetchModule.getSchedule(fromStation.code,toStation.code,api_key)
            const schedules = responceAPI.segments.map((x:any)=>{
                return(
                    {
                        departure:x.departure,
                        arrival:x.arrival
                    }
                )
            })

            res.status(200).json({
                from:from,
                to:to,
                schedule:schedules
            })
        }
        catch(err){
            console.log(err)
            return next(ApiError.internalServerError(err))
        }
    }
}
export default Schedules