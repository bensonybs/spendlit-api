if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const swaggerUi = require('swagger-ui-express')

const routes = require('./routes')
const passport = require('./config/passport')
const { updateSwaggerDocumentURL } = require('./middleware/helper')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const apiPath = '/api/v1'
const apiDocPath = '/api-docs-v1'

app.use(cors())
app.use(express.json())
app.use(passport.initialize())
// APIs routers
app.use(apiPath, routes)
// APIs Swagger Document
app.use(apiDocPath, updateSwaggerDocumentURL, swaggerUi.serve, swaggerUi.setup())
// Test route for the service
responseStr =`<h1>This is spendlit API speaking.
  <br><br>Go to <a href="https://github.com/bensonybs/spendlit-api">Github</a> or 
  <a href=".${apiDocPath}">Swagger API Document</a> for more infomations.</h1>`
app.get('/', (req, res) => {
  res.send(responseStr)
})

app.listen(port, () => console.log(`Spendlit API listening on port:${port}`))