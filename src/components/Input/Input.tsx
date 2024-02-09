import styles from "./Input.module.scss";

interface InputProps {
    type: string;
    id: string;
    placeholder: string;
} 

export function Input(props: InputProps) {
    return (
        <input 
            className={styles.input} 
            type={props.type}
            id={`${styles[`${props.id}`]}`}
            placeholder={props.placeholder}
        />
    );
}