import React, { forwardRef } from "react";
import styles from "./ModalNotification.module.scss";
import { Notification } from "../Notification";
import { useTheme } from "../../contexts/ThemeProvider"; 

interface ModalNotificationProps {
    ref: React.RefObject<HTMLDivElement>;
}

export const ModalNotification = forwardRef<HTMLDivElement, ModalNotificationProps>(
    (props, ref) => {
        const { darkTheme } = useTheme(); 
        return (
            <div className={styles.container} ref={ref} style={{ background: darkTheme ? "black" : "white", color: darkTheme ? "white" : "black" }}>
                <Notification name="Nome de usuário" follow/>
                <Notification name="Nome de usuário2" follow/>
                <Notification name="Nome de usuário3" like/>
                <Notification name="Nome de usuário4" comment/>
            </div>
        );
    }
);