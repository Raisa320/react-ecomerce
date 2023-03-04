import styles from "../styles/input.module.css";

interface inputProps {
  type: string;
  id: string;
  label: string;
  placeholder?: string;
  data: dataProps | any;
  setData: void | any;
}
interface dataProps {
  username: string;
  email?: string;
  password: string;
}

const Input = ({ type, id, label, placeholder, data, setData }: inputProps) => {
  return (
    <div className={styles.inputContent}>
      <label className={styles.inputLabel} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={id}
        onChange={(e) => setData({...data, [id]: e.target.value})}
        placeholder={placeholder}
        value={data[id]}
      />
    </div>
  );
};

export default Input;
