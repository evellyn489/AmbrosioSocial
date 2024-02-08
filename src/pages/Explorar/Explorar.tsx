import styles from "./Menu.module.scss";

import { MenuComponent } from "../../components/Menu";

export function Explorar() {
    return(
        <div className={styles.container}>
            <MenuComponent />
        </div>
    );
}