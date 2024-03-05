if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const fs = require('fs')
const YAML = require('yaml')

const routes = require('./routes')
const passport = require('./config/passport')
const cors = require('cors')
const swaggerFile = fs.readFileSync('./swagger.yaml', 'utf-8')
const swaggerDocument = YAML.parse(swaggerFile)
const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(passport.initialize())
// APIs routers
app.use('/api/v1', routes)
// APIs Document
app.use('/api-docs-v1', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
// Test route for the service
app.get('/', (req, res) => {
  res.send('This is spendlit api speaking, go back to <a href="https://github.com/bensonybs/spendlitAPI">Github</a>')
})

app.listen(port, () => console.log(`Spendlit API listening on port http://localhost:${port}`))