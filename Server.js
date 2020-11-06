const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const userRouter = require('./routes/users')

const app = express()
app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))

app.get('/', (req, res) => {
  res.send('First get request')
})
// Routes
app.use('/users', userRouter);

let port = process.env.PORT || 3000
app.listen(port, (req, res) => console.log('Server ON'))

