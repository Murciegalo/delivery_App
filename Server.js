const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const deliveryRouter = require('./routes/delivery')

const app = express()
app.use(cors())
//Access req.body as {}
app.use(bodyparser.urlencoded({extended:false}))
//Accepts JSON
app.use(bodyparser.json())

app.get('/', (req, res) => {
  res.send('First get request')
})
// Routes
app.use('/users', userRouter)
app.use('/auth', authRouter)
app.use('/delivery', deliveryRouter)

let port = process.env.PORT || 3000
app.listen(port, (req, res) => console.log('Server ON'))

