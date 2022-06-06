import express from 'express'
import order_controller from '../controller/controller.js'
import db from '../db.config/db.configs.js'
const router=express.Router()
router.post('/create',db,order_controller.create)
router.get('/show',db,order_controller.show_all)
router.get('/show/:id',db,order_controller.show_by_id)
router.patch('/update/:id',db,order_controller.update_by_id)
router.delete('/delete/:id',db,order_controller.delete_by_id)

export  default router