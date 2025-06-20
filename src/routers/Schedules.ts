import { Router } from "express";
import Schedules from "../controllers/schedules";

const router = Router()
router.get('/schedules/:from/:to',async(req,res,next)=>{
    await Schedules.get(req,res,next)
});

export default router
