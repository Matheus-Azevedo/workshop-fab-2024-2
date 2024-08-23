import styles from "./input.module.css";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, name, placeholder, value, onChange }: InputProps) {
  return (
    <div className={styles.container_input}>
      <label htmlFor={name}></label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
