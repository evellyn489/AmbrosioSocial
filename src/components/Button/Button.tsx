import styles from "./Button.module.scss";

interface ButtonProps {
    name: string;
}

export function Button(props: ButtonProps) {
    return(
        <button className={styles.button} type="submit">{props.name}</button>   
    );
}