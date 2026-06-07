import styles from "./SpotifyLogin.module.css"

const SpotifyLogin = () => {
    return <section className={styles.root}>
        <a href="http://127.0.0.1:3000/api/auth/login" className={styles.loginButton}>Login with Spotify</a>
    </section>
}

export default SpotifyLogin