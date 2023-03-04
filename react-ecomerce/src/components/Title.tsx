import styles from "../styles/title.module.css";

interface titleProps {
  title: String;
}

const Title = ({ title }: titleProps) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default Title;
