import styles from "../styles/input.module.css";

interface inputProps {
  id: string;
  label: string;
  data: number | string;
  setData: void | any;
  dropDownData: dropDownData
}

interface dropDownData {
  id?: number;
  name: string;
}

const Dropdown = ({ id, label, data, setData }: inputProps) => {
  return (
    <div className={styles.inputContent}>
      <label className={styles.inputLabel} htmlFor={id}>
        {label}
      </label>
      <select id={id}>
      <option value="value1">Value 1</option>
      </select>
    </div>
  );
};

export default Dropdown;
