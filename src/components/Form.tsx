import styles from "../styles/form.module.css";

interface boxProps {
  children?: JSX.Element | JSX.Element[];
  data: dataProps;
}

interface dataProps {
  username?: string;
  email?: string;
  password?: string;
}

const Form = ({ children, data }: boxProps) => {
  //Envío de data
  const handleSendData = () => {};
  return (
    <form className={styles.form} onSubmit={handleSendData}>
      {children}
    </form>
  );
};

export default Form;
