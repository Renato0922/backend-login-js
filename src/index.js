import express from 'express'
import bodyParser from 'body-parser'

import userController from './controllers/user'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.use('/user', userController)

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})
