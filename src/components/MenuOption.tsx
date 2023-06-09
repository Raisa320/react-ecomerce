import styles from "../styles/menuOption.module.css";

interface menuOptionProps {
  text: string;
  children: JSX.Element | JSX.Element[];
}

const MenuOption = ({ text, children }: menuOptionProps) => {
  return (
    <div className={styles.optionContainer} >
      <div className={styles.option}>
        {children}
        <p className={styles.optionText}>{text}</p>
      </div>
    </div>
  );
};

export default MenuOption;
