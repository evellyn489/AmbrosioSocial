import styles from "./Input.module.scss";
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface InputProps<T extends FieldValues> {
    type: string;
    id: string;
    placeholder: string;
    onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    register?: UseFormRegister<T>;
    label: string;
    error: string;
    defaultValue?: string;
    textColor?: string;
} 

export function Input<T extends FieldValues>(props: InputProps<T>) {
    const { type, id, placeholder, register, label, error, defaultValue, textColor } = props;

    const textStyle = textColor ? { color: textColor } : {};
    const registerProps = register && {...register(id as Path<T>)};

    return (
        <input 
            className={styles.input} 
            type={type}
            id={`${styles[`${id}`]}`}
            placeholder={placeholder}
            aria-label={label}
            aria-describedby={error}
            aria-required
            onChange={props.onchange}
            defaultValue={defaultValue}
            style={textStyle}
            {...registerProps}
        />
    );
}