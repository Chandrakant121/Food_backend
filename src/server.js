const express = require("express")
const colors = require("colors")
const cors = require("cors")
const morgan = require("morgan")
const dotenv = require('dotenv')
const mongoose = require("mongoose")
const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))  // shows end point in terminal


const connect = () => {
    return mongoose.connect(process.env.MONGO_URL)
};

app.get('/', (req, res) => {
    return res.status(200).send("Food App")
})

const PORT = process.env.PORT || 8080



app.listen(PORT, () => {
    try {
        connect()
        console.clear()
        console.log(`Connected to node server ${PORT}`.white.bgMagenta)
    }
    catch (err) {
        console.log(err)
    }
})