import { Router } from "express";
import user from '../controllers/users'
import multer from 'multer'
import { uploadImg } from "../middlewares/uploadMiddleware";
import { dirname } from "node:path/win32";

const router = Router()
const upload = multer({storage:uploadImg('../public/ava')})

router.post('/register',async(req,res,next)=>{
    await user.register(req,res,next)
})
router.post('/login',async(req,res,next)=>{
    await user.login(req,res,next)
})
router.post('/uploadImg',upload.single('img'),async (req,res,next)=>{
    await user.uploadImg(req,res,next)
})

export default router