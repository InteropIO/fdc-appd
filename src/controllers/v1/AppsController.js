module.exports = (req, res) => {
    const applications = require(__basedir + '/data.json')
    const payload = {
        applications,
        message: 'successful'
    }
    res.status(200).json(payload)
}