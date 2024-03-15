import { ReactNode } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
    name: string | ReactNode;
    label: string;
    icon?: ReactNode;
    disabled?: boolean;
    click?: () => void;
}

export function Button(props: ButtonProps) {
    return(
        <button 
            className={styles.button} 
            type="submit"
            onClick={props.click}
            aria-label={props.label}
            disabled={props.disabled}
        >
            {props.name}
            {props.icon}
        </button>   
    );
}