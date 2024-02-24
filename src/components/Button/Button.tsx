import { ReactNode } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
    name: string;
    label: string;
    icon?: ReactNode;
    click: () => void;
}

export function Button(props: ButtonProps) {
    return(
        <button 
            className={styles.button} 
            type="submit"
            onClick={props.click}
            aria-label={props.label}
        >
            {props.name}
            {props.icon}
        </button>   
    );
}