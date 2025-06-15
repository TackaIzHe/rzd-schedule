import { Router } from "express";
import Schedules from './Schedules'
import user from './users'
const router = Router()

router.use(Schedules)
router.use(user)

export default router