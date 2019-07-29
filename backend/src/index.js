const express = require('express')
const app = express()
const cors = require('cors')

require('./database.js')

app.use(cors())

app.use('/', require('./routes/index.js'))

app.listen(3002, () => {
    console.log('Server on port 3002')
})
