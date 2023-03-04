import styles from "../styles/image.module.css";

interface imageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: imageProps) => {
  return <img className={styles.image} src={src} alt={alt} />;
};

export default Image;
