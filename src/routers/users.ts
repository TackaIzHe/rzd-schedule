import { Router } from "express";
import user from '../controllers/users'
import multer from 'multer'
import { uploadImg } from "../middlewares/uploadMiddleware";
import { dirname } from "node:path/win32";

const router = Router()
const upload = multer({storage:uploadImg('../public/ava')})

router.post('/login',async(req,res,next)=>{
    await user.login(req,res,next)
})
router.post('/register',async(req,res,next)=>{
    await user.register(req,res,next)
})
router.post('/uploadImg',upload.fields([{name:'id'},{name:'img'}]),async (req,res,next)=>{
    await user.uploadImg(req,res,next)
})
router.get('/logout',async(req,res,next)=>{
    await user.logout(req,res,next)
})

export default router