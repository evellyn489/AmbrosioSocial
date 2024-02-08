import styles from "./Button.module.scss";

interface ButtonProps {
    name: string;
    type: boolean;
}

export function Button(props: ButtonProps) {
    return(
        <>
        {
            props.type ? (
                <button className={`${styles.button} ${styles.login}`} type="submit">{props.name}</button>
            ) : (
                <button className={styles.button} type="submit">{props.name}</button>   
            )
        }
        </>
    );
}