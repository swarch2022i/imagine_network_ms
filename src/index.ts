import express from 'express'
import cors from 'cors'
require('dotenv').config()
import dbConnection from './database/config'

//initializations
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
dbConnection()

//Routes
app.use('/api/comments', require('./routes/comment.route.ts'))
app.use('/api/votes', require('./routes/vote.route.ts'))

//start server
app.listen(process.env.PORT, () => {
  console.log('server on port: ', process.env.PORT)
})
