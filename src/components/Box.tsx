import styles from "../styles/box.module.css";

interface boxProps {
  children?: JSX.Element | JSX.Element[];
  width?: string
  height?: string
}

const Box = ({ children, width, height }: boxProps) => {
  return <div className={styles.box} style={{height:height,width:width}}>{children}</div>;
};

export default Box;
