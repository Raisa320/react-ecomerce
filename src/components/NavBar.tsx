import { Link } from "react-router-dom";
import NotificationButton from "./NotificationButton";
import styles from "../styles/navbar.module.css";
import ProfileButton from "./ProfileButton";

const NavBar = () => {
  return (
    <div className={styles.mainContainer}>
      <NotificationButton />
      <ProfileButton />
    </div>
  );
};

export default NavBar;
