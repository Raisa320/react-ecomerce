import styles from "../styles/button.module.css";

interface buttonProps {
  content: string;
  type: "button" | "submit" | "reset";
}

const Button = ({ content, type }: buttonProps) => {
  return (
    <button type={type} className={styles.primary}>
      {content}
    </button>
  );
};

export default Button;
