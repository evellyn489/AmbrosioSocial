// Button.tsx
import { ReactNode } from "react";

import styles from "./Button.module.scss";
import { useFontSize } from "../../contexts/FontSizeContext/FontSizeContext";

interface ButtonProps {
    name: string | ReactNode;
    label: string;
    icon?: ReactNode;
    disabled?: boolean;
    click?: () => void;
    useFontSizeClasses?: boolean; 
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
            style={{ fontSize: fontSize === 'small' ? '9pt' : fontSize === 'medium' ? '12pt' : '15pt' }}
        >
            {props.name}
            {props.icon}
        </button>   
    );
}
