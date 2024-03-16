import { ReactNode } from "react";

import styles from "./Button.module.scss";
import { useFontSize } from "../../contexts/FontSizeContext/FontSizeContext";

interface ButtonProps {
    name: string | ReactNode;
    label: string;
    icon?: ReactNode;
    disabled?: boolean;
    click?: () => void;
}

export function Button(props: ButtonProps) {
    const { fontSize } = useFontSize();

    return(
        <button 
            className={`${styles.button} ${fontSize === 'small' ? 'smallFont' : fontSize === 'medium' ? 'mediumFont' : 'largeFont'}`}
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