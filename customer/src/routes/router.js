import express from 'express'
import customer_controller from '../controller/controller.js'
import db from '../db.config/db.configs.js'
const router=express.Router()
router.post('/create',db,customer_controller.create)
router.get('/show',db,customer_controller.show_all)
router.get('/show/:id',db,customer_controller.show_by_id)
router.patch('/update/:id',db,customer_controller.update_by_id)
router.delete('/delete/:id',db,customer_controller.delete_by_id)

export  default router