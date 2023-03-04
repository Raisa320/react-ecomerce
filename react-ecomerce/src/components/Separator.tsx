import styles from "../styles/separator.module.css";

interface separatorProps {
  tag?: String;
}

const Separator = ({ tag }: separatorProps) => {
  return <hr className={styles.hr}>{tag && <p>{tag}</p>}</hr>;
};

export default Separator;
