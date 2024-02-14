import React, { useState } from "react";
import styles from "./Explorar.module.scss";
import { Menu } from "../../components/Menu";
import { Publication } from "../../components/Publication";

export function Explorar() {
    const [numPublications, setNumPublications] = useState(2); 

    const handleMorePublication = () => {
        setNumPublications(prevNumPublications => prevNumPublications + 2); 
    };

    return (
        <div className={styles.container}>
            <Menu />
            <div className={styles.content}>
                <div className={styles.publicationsContainer}>
                    {[...Array(numPublications)].map((_, index) => (
                        <Publication key={index} /> 
                    ))}
                </div>
                <footer className={styles.footer}>
                    <p>
                        <span onClick={handleMorePublication}>More...</span>
                    </p>
                </footer>
            </div>
        </div>
    );
}
