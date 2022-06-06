import express from 'express'
import books_controller from '../controller/controller.js'
import db from '../db.config/db.configs.js'
const router=express.Router()
router.post('/create',db,books_controller.create)
router.get('/show',db,books_controller.show_all)
router.get('/show/:id',db,books_controller.show_by_id)
router.patch('/update/:id',db,books_controller.update_by_id)
router.delete('/delete/:id',db,books_controller.delete_by_id)

export  default router