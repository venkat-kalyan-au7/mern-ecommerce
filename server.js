import app from "./app.js"

import dotenv from "dotenv"
import mongoose from "mongoose"



dotenv.config()

mongoose.connect(process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(()=> console.log('MongoDB Connected Successfully...'))
    .catch(err => console.log(err))

const PORT = process.env.PORT

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)