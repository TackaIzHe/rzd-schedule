import { Router } from "express";
import Schedules from './Schedules'
import user from './users'
import station from './station'
const router = Router()

router.use(Schedules)
router.use(user)
router.use(station)

export default router