const axios = require("axios")

exports.getProfile = async (req, res) => {
    const authHeader = req.headers["authorization"]
    
    if (!authHeader) return res.status(401).json({ error: "No token provided." })

    try {
        const response = await axios.get("https://api.spotify.com/v1/me", {
            headers: { "Authorization": authHeader }
        })
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user profile." })
        console.error(error)
    }
}