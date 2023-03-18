import NavBar from "../components/NavBar"
import styles from '../styles/dashboard.module.css'

const dashboard = () => {
  return (
    <div className={styles.mainContainer}>
        <NavBar />
    </div>
  )
}

export default dashboard