import express from "express"
import morgan from "morgan"

const app = express()



//custom middlewares
import notFound from "./errors/notFound"
import errorHandler from "./errors/errorHandler"

//routes
import userRoutes from './routes/userRoutes'
import productRoutes from './routes/productRoutes'
import uploadRoutes from './routes/multerRoute'


app.get('/',(req,res)=>{
    res.send('server responded')
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(morgan('tiny'))

app.use(notFound)
app.use(errorHandler)


app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/upload', uploadRoutes)



module.exports =app

