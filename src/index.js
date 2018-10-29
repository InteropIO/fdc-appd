// This is better than endless ../../../ etc
global.__basedir = __dirname

const bodyParser = require('body-parser')
const app = require('express')()
const cors = require('cors')

app.use(bodyParser.json())
/**
 * Enable cross-origin for a smooth demo
 */
app.use(cors({
    origin: true,
    credentials: true
}))

/**
 * Retrieve a list of applications
 */
app.get('/v1/apps/', require('./controllers/v1/AppsController'))
/**
 * Retrieve an application defintion
 */
app.get('/v1/apps/:appId', require('./controllers/v1/AppController'))
/**
 * Retrieve unique tags list
 */
app.get('/v1/tags', require('./controllers/v1/TagsController'))
/**
 * Create a new application definition
 */
app.post('/v1/apps', require('./controllers/v1/CreateController'))
/*
* Search applications
*/
app.post('/v1/apps/search', require('./controllers/v1/SearchController'))
/**
 * Start listening on port 8090
 */
const port = process.argv[2] || 3030
app.listen(port, () => {
    console.log('Appd running on port', port)
})