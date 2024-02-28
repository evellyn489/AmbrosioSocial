import React, { forwardRef } from "react";
import styles from "./ModalNotification.module.scss";
import { Notification } from "../Notification";

interface ModalNotificationProps {
    ref: React.RefObject<HTMLDivElement>;
}

export const ModalNotification = forwardRef<HTMLDivElement, ModalNotificationProps>(
    (props, ref) => {
        return (
            <div className={styles.container} ref={ref}>
                <Notification name="Nome de usuário" follow/>
                <Notification name="Nome de usuário2" follow/>
                <Notification name="Nome de usuário3" like/>
                <Notification name="Nome de usuário4" comment/>
            </div>
        );
    }
);