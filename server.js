require("./config/mongoose")
const express = require('express')
const app = express()

const router = require('./config/router')

app.set('view engine','ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(router)

app.listen(9000)