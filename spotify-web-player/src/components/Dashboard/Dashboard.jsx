// Dashboard.jsx
import { useEffect, useState } from "react"
import axios from "axios"

const Dashboard = () => {
  const [profile, setProfile] = useState(null)
  const token = new URLSearchParams(window.location.search).get("token")

  useEffect(() => {
    if (token) {
      axios.get("http://127.0.0.1:3000/api/user/me", {
        headers: { "Authorization": `Bearer ${token}` }
      })
      .then(res => setProfile(res.data))
      .catch(err => console.error("Error:", err))
    }
  }, [token])

  if (!profile) return <div>Loading...</div>

  return (
    <div>
      <h1>Welcome, {profile.display_name}</h1>
      <p>Account ID (Use this for linking): {profile.account_id}</p>
      <p>Email: {profile.email}</p>
      {profile.images?.[0] && <img src={profile.images[0].url} alt="Profile" />}
    </div>
  )
}

export default Dashboard