// This is better than endless ../../../ etc
global.__basedir = __dirname

const app = require('express')()

/**
 * Enable cross-origin for a smooth demo
 */
app.use(require('./modules/allow-cors'))

/**
 * Retrieve a list of applications
 */
app.get('/v1/apps/search', require('./controllers/v1/AppsController'))
/**
 * Retrieve an application defintion
 */
app.get('/v1/apps/:appId', require('./controllers/v1/AppController'))

/**
 * Create a new application definition
 */
app.post('/v1/apps', require('./controllers/v1/CreateController'))

/**
 * Start listening on port 8090
 */
const port = process.argv[2] || 3030
app.listen(port, () => {
    console.log('Appd running on port', port)
})