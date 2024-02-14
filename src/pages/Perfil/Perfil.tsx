import styles from "./Perfil.module.scss";

import profile from "../../assets/publications/profile_picture.png";
import logo from "../../assets/logos/gray.png";

import { Button } from "../../components/Button";
import { Publication } from "../../components/Publication";
import { Menu } from "../../components/Menu";

export function Perfil() {
    return (
        <div className={styles.container}>
            <aside>
                <div className={styles.foto}>
                    <img src={profile} alt="" />
                </div>

                <strong>Nome do usuário</strong>

                <div className={styles.data}>
                    <p>x seguidores</p>
                    <p>y seguindo</p>
                </div>

                <Button name="Editar dados"/>
            </aside>

            <main>
                <div className={styles.logoImg}>
                    <img src={logo} alt="Logo do AmbrosioSocial que tem o símbolo AS da cor cinza dentro de um quadrado com bordas cinzas e fundo branco."/>
                </div>

                <div className={styles.content}>
                    <Publication />
                </div>
            </main>

            <div className={styles.menu}>
                <Menu isHome={false}/>
            </div>
        </div>
    );
}