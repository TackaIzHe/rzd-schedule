import { Router } from "express";
import Schedules from "../controllers/schedules";

const router = Router()
router.get('/schedules/:from/:to',async(req,res,next)=>{
    await Schedules.get(req,res,next)
});
router.get('/schedules',async(req,res,next)=>{
    await Schedules.getAll(req,res,next)
});
router.post('/schedules',async(req,res,next)=>{
    await Schedules.post(req,res,next)
});

export default router
