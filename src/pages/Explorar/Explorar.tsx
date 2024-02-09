import styles from "./Explorar.module.scss";

import { Menu } from "../../components/Menu";
import { Publication } from "../../components/Publication";

export function Explorar() {
    return(
        <div className={styles.container}>
            <Menu />
            <Publication />
            <Publication />
            <footer className={styles.footer}>
                More...
            </footer>
        </div>
    );
}