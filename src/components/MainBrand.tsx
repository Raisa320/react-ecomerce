import { Link } from "react-router-dom";
import styles from "../styles/mainBrand.module.css";


const MainBrand = () => {
  return (
    <Link className={styles.mainBrand} to="/home">
      <img className={styles.icon} src="/vite.svg" alt="Vite Icon" />
      <h1 className={styles.title}>Ecommerce</h1>
    </Link>
  );
};

export default MainBrand;
