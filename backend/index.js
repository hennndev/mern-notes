const express = require("express")
const connection = require("./config/db")
const dbInit = require("./config/dbInit")
const cors = require("cors")
require("dotenv").config({})
const notesRoutes = require("./routers/notes.routes")

dbInit()
const app = express()
app.use(express.json())
app.use(cors())
app.use(notesRoutes)

connection.connect((err) => {
    if(err) throw err
    app.listen(process.env.PORT || 5000, () => {
        console.log("Server and MySQL database has connected")
    })
})
