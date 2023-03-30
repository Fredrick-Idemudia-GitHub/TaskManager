const express = require('express')
const app = express()
const tasks = require('./routers/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

app.use(express.json()) // to be able to use the data in req.body
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.end('home page')
// })

app.use('/api/v1/tasks', tasks)

const port = 3000

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log('Server Listening  on port 3000 ...'))
    } 
    
    catch (error) {
        console.log(error)
    }
}


start();

