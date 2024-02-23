import { useState } from "react";

import styles from "./Perfil.module.scss";

import profile from "../../assets/publications/profile_picture.png";
import { FaCheck } from "react-icons/fa";

import { Button } from "../../components/Button";
import { Publication } from "../../components/Publication";
import { Menu } from "../../components/Menu";

export function Perfil() {
    const [following, setFollowing] = useState(false);

    function handleClickFollowing() {
        setFollowing(!following);
    }

    return (
        <div className={styles.container}>
            <Menu isHome={false} isPerfil={true}/>

            <div className={styles.asideMain}>
                <aside>
                    <div className={styles.foto}>
                        <img src={profile} alt="" />
                    </div>

                    <strong>Nome do usuário</strong>

                    <Button  name={`${following ? "Seguindo" : "Seguir"}`} click={handleClickFollowing} icon={following && <FaCheck />}/>

                    <div className={styles.data}>
                        <p>x seguidores</p>
                        <p>y seguindo</p>
                    </div>

                    <Button name="Editar dados" click={() => 0}/>
                </aside>

                <main>
                    <Publication />
                </main>
            </div>
        </div>
    );
}