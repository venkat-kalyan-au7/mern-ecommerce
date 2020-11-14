import express from 'express'
const router = express.Router()

import { getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    createProductReview,
    getTopProducts} from "../controllers/productController.js"

import isAuth from "../middlewares/isAuth.js"
import isAdmin from "../middlewares/isAdmin.js"

router.get('/',getProducts)
router.post('/',isAuth,isAdmin,createProduct)

router.get('/top', getTopProducts)

router.post('/:id/reviews',isAuth,createProductReview)

router.get('/:id',getProductById)
router.delete('/:id',isAuth,isAdmin,deleteProduct)
router.put('/:id',isAuth,isAdmin,updateProduct)


export default router
