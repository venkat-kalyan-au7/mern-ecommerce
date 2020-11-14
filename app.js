import express from "express"
import morgan from "morgan"
import path from "path"
import cors from "cors"

const app = express()



//custom middleware
import {errorHandler,notFound} from "./errors/errorHandler.js"

//routes
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import uploadRoutes from './routes/multerRoute.js'




if(process.env.NODE_ENV == "production"){
    app.use(express.static('client/build'))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", 'index.html'))
    })
}


  

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(morgan('tiny'))
app.use(cors())



app.use(errorHandler)



app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/upload', uploadRoutes)



export default app

