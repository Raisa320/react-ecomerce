import { useState } from "react";
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";
import styles from "../styles/dashboard.module.css";

const dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className={styles.mainContainer}>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <NavBar />
    </div>
  );
};

export default dashboard;
