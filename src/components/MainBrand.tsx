import { Link } from "react-router-dom";
import styles from "../styles/mainBrand.module.css";

const MainBrand = () => {
  return (
    <div>
      <Link className={styles.leftElements} to="/home">
        <img className={styles.icon} src="/vite.svg" alt="Vite Icon" />
        <h1 className={styles.title}>Ecommerce</h1>
      </Link>
    </div>
  );
};

export default MainBrand;
