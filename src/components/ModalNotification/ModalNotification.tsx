import React, { forwardRef } from "react";
import styles from "./ModalNotification.module.scss";
import { Notification } from "../Notification";
import { useTheme } from "../../contexts/ThemeProvider/ThemeProvider";

interface ModalNotificationProps {
    ref: React.RefObject<HTMLDivElement>;
}

export const ModalNotification = forwardRef<HTMLDivElement, ModalNotificationProps>(
    (props, ref) => {
        const { darkTheme } = useTheme(); 
        const themeClass = darkTheme ? styles.darkTheme : styles.lightTheme;
        return (
            <div className={`${styles.container} ${themeClass}`} ref={ref}>
                <Notification name="Nome de usuário" follow/>
                <Notification name="Nome de usuário2" follow/>
                <Notification name="Nome de usuário3" like/>
                <Notification name="Nome de usuário4" comment/>
            </div>
        );
    }
);