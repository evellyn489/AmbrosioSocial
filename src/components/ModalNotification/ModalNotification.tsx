import styles from "./ModalNotification.module.scss";
import { Notification } from "../Notification";

export function ModalNotification() {
    return (
        <div className={styles.container}>
            <Notification name="Nome de usuário" follow/>
            <Notification name="Nome de usuário2" follow/>
            <Notification name="Nome de usuário3" like/>
            <Notification name="Nome de usuário4" comment/>
        </div>
    );
}