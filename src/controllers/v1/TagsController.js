module.exports = (req, res) => {
    // Get apps and search for the one with such appId
    const applications = require(__basedir + '/data.json')
    let tags = []
    applications.forEach((app) => {
        if (app.tags) {
            tags = tags.concat(app.tags)
        }
    })
    // return unique only
    tags = tags.filter((tag, index) => {
        return tags.indexOf(tag) == index
    })
    return res.status(200).json({
        tags,
        message: 'successful'
    })
}