import styles from "./Button.module.scss";

interface ButtonProps {
    name: string;
    type: number;
}

export function Button(props: ButtonProps) {
    return(
        <>
        {
            props.type == 1 && (
                <button className={styles.button} type="submit">{props.name}</button>   
                
            )
        }

        {
            props.type == 2 && (
                <button className={`${styles.button} ${styles.login}`} type="submit">{props.name}</button>
            )
        }

        {
            props.type == 3 && (
                <button className={`${styles.button} ${styles.cadastroInicial}`} type="submit">{props.name}</button>   
            )
        }
        </>
    );
}