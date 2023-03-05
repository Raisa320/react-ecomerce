import styles from "../styles/box.module.css";

interface boxProps {
  children?: JSX.Element | JSX.Element[];
}

const Box = ({ children }: boxProps) => {
  return <div className={styles.box}>{children}</div>;
};

export default Box;
