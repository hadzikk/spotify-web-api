import { Routes, Route } from "react-router"
import SpotifyLogin from "./components/SpotifyLogin/SpotifyLogin"
import Dashboard from "./components/Dashboard/Dashboard"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SpotifyLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default App