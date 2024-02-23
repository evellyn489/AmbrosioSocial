import { ReactNode } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
    name: string;
    click: () => void;
    icon?: ReactNode;
}

export function Button(props: ButtonProps) {
    return(
        <button 
            className={styles.button} 
            type="submit"
            onClick={props.click}
        >
            {props.name}
            {props.icon}
        </button>   
    );
}