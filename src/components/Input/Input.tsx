import styles from "./Input.module.scss";
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';


interface InputProps<T extends FieldValues> {
    type: string;
    id: string;
    placeholder: string;
    register: UseFormRegister<T>;
} 

export function Input<T extends FieldValues>(props: InputProps<T>) {
    return (
        <input 
            className={styles.input} 
            type={props.type}
            id={`${styles[`${props.id}`]}`}
            placeholder={props.placeholder}
            {...props.register(props.id as Path<T>)}
        />
    );
}