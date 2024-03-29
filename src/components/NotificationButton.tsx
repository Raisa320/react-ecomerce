import styles from "../styles/notificationButton.module.css";

const NotificationButton = () => {
  return (
    <button className={styles.notificationIcon}>
      <span></span>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        aria-hidden="true"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        color="#42d9a2fe"
      >
        <path d="M256 480a80.09 80.09 0 0073.3-48H182.7a80.09 80.09 0 0073.3 48zm144-192v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48c-68.88 15.61-96 76.76-96 147.47V288l-48 64v48h384v-48z"></path>
      </svg>
    </button>
  );
};

export default NotificationButton;
