import express from "express"

const router = express.Router()

import {userLogin,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUserByAdmin} from '../controllers/userController.js'

import isAuth from "../middlewares/isAuth.js"
import isAdmin from "../middlewares/isAdmin.js"


router.post('/',registerUser)
router.post('/login',userLogin)
router.get('/',isAuth,isAdmin,getUsers)

router.get('/profile',isAuth,getUserProfile)
router.put('/profile',isAuth,updateUserProfile)

router.get('/:id',isAdmin,getUserById)
router.put('/:id',isAdmin,updateUserByAdmin)
router.delete('/:id',isAdmin,deleteUser)


export default router