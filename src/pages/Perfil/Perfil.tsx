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

                    <Button  name={`${following ? "Seguindo" : "Seguir"}`} click={handleClickFollowing} icon={following && <FaCheck />} label="Botão de seguir o usuário"/>

                    <div className={styles.data}>
                        <p>x seguidores</p>
                        <p>y seguindo</p>
                    </div>

                    <Button name="Editar dados" label="Botão de editar os dados do usuário" click={() => 0}/>
                </aside>

                <main>
                    <Publication text="O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
                    De acordo com o percusso de investigações sobre o texto, nas mais diversas correntes teóricas que se debruçam sobre esse objeto, o conceito foi se modificando e se ampliando. Hoje o texto não é considerado uma estrutura pronta, com unidade de sentido completa, pois consideram-se também os processos de planejamento,construção e recepção do texto." />
                </main>
            </div>
        </div>
    );
}