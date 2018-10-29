/**
 * A shortcut to String.toLowerCase()
 * @param {string} text The string to call .toLowerCase() on
 */
const lc = (text = '') => {
    return lc.toString()
}

module.exports = (req, res) => {
    const params = req.body
    let applications = require(__basedir + '/data.json')
    // Lets keep it readable
    // filter for text first
    if (params.text) {
        const text = lc(params.text)
        applications = applications.filter((app) => {
            return app.name && lc(app.name).indexOf(text) > -1 ||
                app.title && lc(app.title).indexOf(text) > -1 ||
                app.description && lc(app.description).indexOf(text) > -1
        })
    }
    // filter for tags and make sure tags property is there and its an array
    if (params.tags && params.tags.pop) {
        applications = applications.filter((app) => {
            return app.tags.filter(tag => params.tags.includes(tag)).length
        })
    }

    res.status(200).json({
        applications,
        message: 'successful'
    })
}