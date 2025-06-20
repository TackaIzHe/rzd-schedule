import { Router } from "express";
import station from "../controllers/station";

const router = Router()

router.use('/station',async(req,res,next)=>{
    await station.get(req,res,next)
})

export default router