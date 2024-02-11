import React, { useState } from "react";
import styles from "./Explorar.module.scss";
import { Menu } from "../../components/Menu";
import { Publication } from "../../components/Publication";

export function Explorar() {
    const [numPublications, setNumPublications] = useState(2); // Começa com o número padrão de publicações

    const handleMorePublication = () => {
        setNumPublications(prevNumPublications => prevNumPublications + 2); // Aumenta o número de publicações em 2
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Menu />
                <div className={styles.publicationsContainer}>
                    {[...Array(numPublications)].map((_, index) => (
                        <Publication key={index} /> // Renderiza o número atual de publicações
                    ))}
                </div>
            </div>
            <footer className={styles.footer}>
            <p>
                <span onClick={handleMorePublication}>More...</span>
            </p>
            </footer>
        </div>
    );
}
