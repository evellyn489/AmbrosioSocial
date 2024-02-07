import styles from "./Logo.module.scss";

import logo from "../../assets/logos/gradient.png";


export function Logo() {
    return (
        <aside className={styles.image}>
            <img src={logo} alt="Logo da rede social Ambrosio Social que contém as siglas A e S e o nome da rede social logo em baixo com um gradiente roxo com azul claro." />
        </aside>
    );
}