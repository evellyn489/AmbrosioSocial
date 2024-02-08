import styles from "./Explorar.module.scss";

import { Menu } from "../../components/Menu";

export function Explorar() {
    return(
        <div className={styles.container}>
            <Menu />
        </div>
    );
}