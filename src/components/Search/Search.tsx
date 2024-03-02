import { Input } from "../Input";
import styles from "./Search.module.scss";

export function Search() {
    return (
        <div className={styles.container}>
            <Input type="text" id="users" placeholder="Pesquisar" label="Pesquisar usuários" error="search" />
        </div>
    );
}