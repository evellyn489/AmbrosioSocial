import styles from "./Perfil.module.scss";

import profile from "../../assets/publications/profile_picture.png";

import { Button } from "../../components/Button";
import { Publication } from "../../components/Publication";
import { Menu } from "../../components/Menu";

export function Perfil() {
    return (
        <div className={styles.container}>
            <Menu isHome={false}/>

            <div className={styles.asideMain}>
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
                    <Publication />
                </main>
            </div>
        </div>
    );
}