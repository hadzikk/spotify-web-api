const config = require('../config')
const axios = require('axios')
const CLIENT_ID = config.CLIENT_ID
const CLIENT_SECRET = config.CLIENT_SECRET
const REDIRECT_URI = config.REDIRECT_URI

exports.login = async (req, res) => {
    try {
        const scope = "streaming user-read-email user-read-private"
        const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(scope)}`
        res.redirect(authUrl)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.callback = async (req, res) => {
    const { code } = req.query
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
        params: { code, redirect_uri: REDIRECT_URI, grant_type: 'authorization_code' },
        headers: {
            'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        })

        const token = response.data.access_token
        
        res.redirect(`http://localhost:5173/dashboard?token=${token}`)
    } catch (err) {
        res.status(400).send('Authentication failed')
    }
}

exports.token = async (req, res) => {
    try {
        res.status(200).json({ token: req.token })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}