import ReactIcon from "../assets/react.svg";
import styles from "../styles/profileButton.module.css";

const ProfileButton = () => {
  return (
    <button className={styles.buttonProfile}>
      <img
        className={styles.imageButtonProfile}
        src={ReactIcon}
        alt="React Icon"
      />
    </button>
  );
};

export default ProfileButton;
