import { Router } from "express";
import user from '../controllers/users'

const router = Router()

router.post('/register',async(req,res,next)=>{
    await user.register(req,res,next)
})
router.post('/login',async(req,res,next)=>{
    await user.login(req,res,next)
})

export default router