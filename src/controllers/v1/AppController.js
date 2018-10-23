module.exports = (req, res) => {
    let appId
    try {
        appId = decodeURIComponent(req.params.appId)
    } catch (e) {
        return res.status(400).json({
            message: 'Bad appId',
            code: 0
        })
    }
    // Get apps and search for the one with such appId
    const applications = require(__basedir + '/data.json')
        .filter(app => app.appId === appId)
    // If we found a matching application
    if (applications.length) {
        return res.status(200).json({
            applications,
            message: 'successful'
        })
    }
    // Return a 400 bad request with not found message
    res.status(400).json({
        message: 'No apps found',
        code: 0
    })
}