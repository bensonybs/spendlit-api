const dayjs = require('dayjs')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const YAML = require('yaml')

const helper = {
  cleanUser: user => {
    // Delete and modify data from database
    delete user.password
    delete user.isDeleted
    delete user.createdAt
    delete user.updatedAt

    return user
  },
  signJWT: user => {
    const expiration = { expiresIn: '7d' }
    const token = jwt.sign(user, process.env.JWT_SECRET, expiration)
    
    return token
  },
  /**
   * Dynamically change the content in swagger.yaml
  */
  updateSwaggerDocumentURL: (req, res, next) => {
    const port = process.env.PORT || 3000
    const requestHostName = `${req.protocol}://${req.hostname}:${port}`;
    const swaggerFile = fs.readFileSync('./swagger.yaml', 'utf-8');
    const swaggerDocument = YAML.parse(swaggerFile);
    // Check swagger.yaml
    swaggerDocument.servers[0].url = requestHostName + '/api/v1'
    req.swaggerDoc = swaggerDocument
    next()
  }
}

module.exports = helper