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
/*
* Search applications
*/
app.post('/v1/apps/search', require('./controllers/v1/SearchController'))
/**
 * Endpoint to deliver hardcoded json of a component
 */
app.get('/v1/component', (req, res) => {
    res.status(200).send({
        window: {
            url: "https://www.chartiq.com/tutorials/?slug=finsemble",
            height: 800,
            width: 1000
        },
        component: {
            spawnOnStartup: false
        },
        foreign: {
            services: {
                workspaceService: {
                    persistURL: true
                }
            },
            components: {
                "App Launcher": {
                    launchableByUser: false
                },
                "Window Manager": {
                    showLinker: false,
                    FSBLHeader: true,
                    persistWindowState: true,
                    title: "Finsemble Getting Started Tutorial"
                }
            }
        }
    });
})


/**
 * Start listening on port 8090
 */
const port = process.argv[2] || 3030
app.listen(port, () => {
    console.log('Appd running on port', port)
})
